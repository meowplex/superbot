import { Resp } from "../../../../../lib/core/index.js"
import { Database } from "../../../../database/index.js";

const database = new Database()

export default async function nickname_command(cctx, newNickname) {
    let res;
    if (newNickname == null) {
        res = new Resp("Ваш никнейм: " + cctx.info.nickname)
        cctx.reply(res);
        return;
    }

    if (_isValid(newNickname) == false) {
        res = new Resp("Никнейм содержим запрещенные символы")
        cctx.reply(res);
        return;
    }

    await database.updateUser({ [`${cctx.messengerName}_id`]: cctx.messengerId }, { nickname: newNickname })
    res = new Resp("Никнейм успешно изменён на " + newNickname)
    cctx.reply(res);
}

function _isValid(str) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@]/g.test(str);
}