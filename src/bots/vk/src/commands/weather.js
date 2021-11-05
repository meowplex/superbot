import { superBot } from "../../../../bots/bot/index.js";
import { CommandNames } from "../../../../../utils/command_names.js";

export default async function weather_command(context) {
    let cityName = context.$match[1]
    let res = await superBot.run(CommandNames.weather, context.cctx, cityName)
    return context.send(`${res.text}`);
}