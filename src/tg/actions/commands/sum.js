import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function sum_command(context) {
    console.log(context.update.message.text)
    let res = await superBot.run(CommandNames.sum, context.сctx)
    await context.reply(`${res.text}`);
}