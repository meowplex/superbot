import superBot from "../../main/index.js";
import { CommandNames } from "../../../../utils/command_names.js";


export default async function school_quiz_command(context) {
    let answerId = parseInt(context?.$match[1])
    let res = await superBot.run(CommandNames.school_quiz, context.cctx, answerId)
    return context.send(`${res.text}`);
}