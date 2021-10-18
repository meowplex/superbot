import { Resp } from "../../../../lib/superbot/index.js";

export default function hello_command(cctx) {
    let res = new Resp("Hello")
    cctx.reply(res);
}
