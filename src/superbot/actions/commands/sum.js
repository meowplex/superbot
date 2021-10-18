import { Resp } from "../../../../lib/superbot/index.js";
import { sum } from "../technical/sum.js"

export function sum_command(context) {
    let res = new Resp("Hello")
    return res;
}
