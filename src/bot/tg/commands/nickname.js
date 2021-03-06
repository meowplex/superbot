import superBot from "../../../bot/main/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function nickname_command(context) {
    let res = await superBot.run(CommandNames.nickname, context.cctx, context?.match[1])
    return context.reply(`${res.text}`);
}