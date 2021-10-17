import { Resp } from "../../../lib/superbot/index.js";

export function hello_command(context) {
    let res = new Resp("Hello")
    context.reply(res)
}