import { Resp } from "../../../../lib/superbot/index.js";
//import fetch from "node-fetch";

export default function weather_command(context, cityName) {
    let res = new Resp(`Hello, ${cityName}`)
    context.reply(res)
}
