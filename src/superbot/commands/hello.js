import { Resp } from "../../../lib/superbot/index.js";

export function hello_command() {
    return (context) => {
        let res = new Resp("Hello")
        context.reply(res)
    }
}