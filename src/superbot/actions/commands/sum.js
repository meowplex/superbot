import { Resp } from "../../../../lib/superbot/index.js";
import { sum } from "../technical/sum.js"

export default function sum_command(context) {
    let res = new Resp(
        sum(
            context.text
                .split(' ')
                .slice(1)
                .map(str => parseInt(str))
        )
    )
    context.reply(res);
}
