import { superBot } from "../../../superbot/index.js";
import { CommandNames } from "../../../../utils/command_names.js";

export default async function weather_command(context) {
    let res = await superBot.run(CommandNames.weather, context.cctx, 'random_city')
    return context.send(`${res.text}`);
}