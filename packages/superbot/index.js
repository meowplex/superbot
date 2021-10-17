import { SuperBot } from "../../lib/superbot/index.js"
import { Command_names } from "../../utils/command_names.js";
import { get_hello_action } from "./actions/hello.js"
import { get_logger_action } from "./actions/logger.js"

export const super_bot = new SuperBot()

superBot.use(get_logger_action())
superBot.on(Command_names.hello, get_hello_action())