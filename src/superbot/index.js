import { SuperBot } from "../../lib/superbot/index.js"
import { Commands } from "../../utils/commands.js";
import { get_hello_command } from "./commands/hello.js"
import { get_logger_command } from "./middlewares/logger.js"

export const superBot = new SuperBot()

superBot.use(get_logger_command())
superBot.on(Commands.hello, get_hello_command())