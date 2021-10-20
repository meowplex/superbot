import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function sum_command(context) {
    let strOfNumbers = context.$match[1]
    let arrayOfNumbers = [strOfNumbers.split(' ').map(str => parseInt(str))]
    let res = await superBot.run(CommandNames.sum, context.cctx, arrayOfNumbers)
    return context.send(`${res.text}`);
}