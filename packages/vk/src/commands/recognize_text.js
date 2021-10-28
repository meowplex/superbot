import { superBot } from "../../../bot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";


export default async function recognize_text_command(context) {
    const imageUrl = context.attachments[0]?.mediumSizeUrl
    context.send(`Ожидайте...`);
    let res = await superBot.run(CommandNames.recognize_text, context.cctx, imageUrl)
    context.send(res.text);
}