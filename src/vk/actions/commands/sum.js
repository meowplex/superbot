import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function sum_command(context) {
    let res = await superBot.run(CommandNames.sum, context.cctx)
    return context.send(`${res.text}`);
}