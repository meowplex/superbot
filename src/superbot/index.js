import { SuperBot } from "../../lib/superbot/index.js"
import { hello_command } from "./commands/hello.js"
import { setup_logger } from "./middlewares/logger.js"

export const superBot = new SuperBot()

setup_logger()
hello_command()