import { Context } from "../../../../lib/superbot/index.js";
import { superBot } from "../../../superbot/index.js";
import { Command_names } from "../../../../utils/command_names.js";
import { Messengers } from "../../../../utils/messengers.js";

export function get_hello_action()
{
    return async (ctx) =>
    {
        ctx = new Context(Messengers.tg, ctx)
        let res = await superBot.run(Command_names.hello, ctx)
        return ctx.reply(`${res.text}, TG`);
    };
}