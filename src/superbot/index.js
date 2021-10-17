import { SuperBot } from "../../lib/superbot/index.js"
import { Triggers } from "../../utils/triggers.js";
import { get_hello_action } from "./actions/hello.js"
import { get_logger_action } from "./actions/logger.js"

export const superBot = new SuperBot()

superBot.use(get_logger_action())
superBot.on(Triggers.hello, get_hello_action())