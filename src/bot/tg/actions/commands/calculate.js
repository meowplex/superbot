import { superBot } from "../../../../bots/bot/index.js";
import { CommandNames } from "../../../../../utils/command_names.js";

export default async function calculate_command(context) {
    let expression = context.match[1]
    let res = await superBot.run(CommandNames.sum, context.cctx, expression)
    await context.reply(`${res.text}`);
}