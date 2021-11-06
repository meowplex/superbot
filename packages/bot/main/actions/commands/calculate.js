import { Resp } from "../../../../../lib/core/index.js"
import BigEval from "bigeval";

const math = new BigEval()

export default function calculate_command(cctx, expression) {
    let value = math.exec(expression)
    let res;
    if (value == 'ERROR')
        res = new Resp(`Произошла ошибка`)
    else
        res = new Resp(`Ответ: ${value}`)
    cctx.reply(res);
}
