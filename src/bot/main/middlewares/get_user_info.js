import { Database } from "../../../database/index.js"

const database = new Database()

export default async function get_user_info_middleware(cctx) {
    let response = await database.findUser({ [`${cctx.messengerName}_id`]: cctx.messengerId })
    if (response == null){
        response = await database.createUser({[`${cctx.messengerName}_id`]: cctx.messengerId})
    }
    cctx.info = response
}