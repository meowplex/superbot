import { SuperBot } from "../../superlib/index.js"
import { CommandNames } from "../../utils/command_names.js";

import {
    hello_command,
    calculate_command,
    weather_command,
    recognize_text_command
} from "./src/commands/index.js"

import {
    logger_middleware
} from "./src/middlewares/index.js"


export const superBot = new SuperBot()

superBot.use(logger_middleware)

superBot.on(CommandNames.hello, hello_command)
superBot.on(CommandNames.weather, weather_command)
superBot.on(CommandNames.sum, calculate_command)
superBot.on(CommandNames.recognize_text, recognize_text_command)
