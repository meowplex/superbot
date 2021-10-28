import { Resp } from "../../../../superlib/index.js";

export default function hello_command(cctx) {
    let res = new Resp("Hello")
    cctx.reply(res);
}
