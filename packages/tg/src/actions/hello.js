import { Context } from "../../../../lib/superbot/index.js";
import { super_bot } from "../../../superbot/index.js";
import { Command_names } from "../../../../utils/command_names.js";
import { Messengers } from "../../../../utils/messengers.js";

export function get_hello_action()
{
    return async (ctx) =>
    {
        let cctx = new Context(Messengers.tg, ctx)
        let res = await super_bot.run(Command_names.hello, cctx)
        return ctx.reply(`${res.text}, TG`);
    };
}