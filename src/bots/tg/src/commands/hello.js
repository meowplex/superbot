import { superBot } from "../../../../bots/bot/index.js";
import { CommandNames } from "../../../../../utils/command_names.js";


export default async function hello_command(context) {
    let res = await superBot.run(CommandNames.hello, context.cctx)
    await context.reply(`${res.text}, TG`);
}