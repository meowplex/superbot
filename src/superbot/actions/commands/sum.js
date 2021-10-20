import { Resp } from "../../../../lib/superbot/index.js";
import { sum } from "../technical/sum.js"

export default function sum_command(cctx, arrayOfNumbers) {
    let sumOfNumbers = sum(...arrayOfNumbers)
    let res = new Resp(`Ответ: ${sumOfNumbers}`)
    cctx.reply(res);
}
