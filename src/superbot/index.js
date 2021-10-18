import { SuperBot } from "../../lib/superbot/index.js"
import { CommandNames } from "../../utils/command_names.js";
import { hello_command } from "./commands/hello.js"
import { weather_command } from "./commands/weather.js";
import { logger_middleware } from "./middlewares/logger.js"

export const superBot = new SuperBot()

superBot.use(logger_middleware)
superBot.on(CommandNames.hello, hello_command)
superBot.on(CommandNames.weather, weather_command)