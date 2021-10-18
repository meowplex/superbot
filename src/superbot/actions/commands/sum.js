import { Resp } from "../../../../lib/superbot/index.js";
import { sum } from "../technical/sum.js"

export default function sum_command(cctx) {
    let res = new Resp(
        sum(
            cctx.text
                .split(' ')
                .slice(1)
                .map(str => parseInt(str))
        )
    )
    cctx.reply(res);
}
