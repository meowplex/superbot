import { SuperBot } from "../../lib/superbot/index.js"
import { Commands } from "../../utils/commands.js";
import { get_hello_action } from "./actions/hello.js"
import { get_logger_action } from "./actions/logger.js"

export const superBot = new SuperBot()

superBot.use(get_logger_action())
superBot.on(Commands.hello, get_hello_action())