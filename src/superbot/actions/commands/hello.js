import { Resp } from "../../../../lib/superbot/index.js";

export default function hello_command(context) {
    let res = new Resp("Hello")
    return res;
}
