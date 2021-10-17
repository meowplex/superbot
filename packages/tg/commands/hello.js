import { Context } from "../../../lib/superbot/index.js";
import { superBot } from "../../superbot/index.js";
import { CommandNames } from "../../../utils/command_names.js";
import { Messengers } from "../../../utils/messengers.js";

export async function tg_hello_command(context)
    {
        let ctx = new Context(Messengers.tg, context.update.message.from.id)
        let res = await superBot.run(CommandNames.hello, ctx)
        return context.reply(`${res.text}, TG`);
  
}