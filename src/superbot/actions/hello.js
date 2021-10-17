import { Resp } from "../../../lib/superbot/index.js";

export function get_hello_action() {
    return (context) => {
        let res = new Resp("Hello")
        context.reply(res)
    }
}