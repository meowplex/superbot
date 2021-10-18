import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";


export default async function hello_command(context) {
    let res = await superBot.run(CommandNames.hello, context.сctx)
    await context.reply(`${res.text}, TG`);
}