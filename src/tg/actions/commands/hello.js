import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function hello_command(context) {
    let res = await superBot.run(CommandNames.hello, context.ctx)
    console.log(res)
    await context.reply(`${res.text}, TG`);
}