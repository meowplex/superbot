import { SuperBot } from "../../../lib/core/index.js"
import { CommandNames } from "../../../utils/command_names.js";

import {
    hello_command,
    calculate_command,
    weather_command,
    recognize_text_command,
    nickname_command
} from "./actions/commands/index.js"

import {
    logger_middleware,
    get_user_info_middleware
} from "./actions/middlewares/index.js"


const superBot = new SuperBot()

superBot.use(logger_middleware)
superBot.use(get_user_info_middleware)

superBot.on(CommandNames.hello, hello_command)
superBot.on(CommandNames.weather, weather_command)
superBot.on(CommandNames.sum, calculate_command)
superBot.on(CommandNames.recognize_text, recognize_text_command)
superBot.on(CommandNames.nickname, nickname_command)

export { superBot as default };