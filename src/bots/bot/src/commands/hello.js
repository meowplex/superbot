import { Resp } from "../../../../../lib/core/index.js"

export default function hello_command(cctx) {
    let res = new Resp("Hello")
    cctx.reply(res);
}
