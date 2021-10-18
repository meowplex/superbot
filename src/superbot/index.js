import { SuperBot } from "../../lib/superbot/index.js"
import { CommandNames } from "../../utils/command_names.js";

import {
    hello_command,
    sum_command,
    weather_command
} from "./actions/commands/index.js"

import {
    logger_middleware
} from "./actions/middlewares/index.js"


export const superBot = new SuperBot()

superBot.use(logger_middleware)

superBot.on(CommandNames.hello, hello_command)
superBot.on(CommandNames.weather, weather_command)
superBot.on(CommandNames.sum, sum_command)
