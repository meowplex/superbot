import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function weather_command(context) {
    let cityName = context.match[1];
    let res = await superBot.run(CommandNames.weather, context.сctx, cityName)
    return context.reply(`${res.text}`);
}