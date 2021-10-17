import { Commands } from "../../../utils/commands.js";
import { Resp } from "../../../lib/superbot/index.js";
import { superBot } from "../index.js";

export function hello_command() {
    superBot.on(Commands.hello, (context) => {
        let res = new Resp("Hello")
        context.reply(res)
    })
}