import { Telegraf } from 'telegraf';
import { hello_command } from "./actions/commands/hello.js";
import { create_superbot_context_middleware } from './actions/middlewares/create_superbot_context.js';

export const tgBot = new Telegraf(process.env.TG_TOKEN);

tgBot.use(create_superbot_context_middleware)

tgBot.hears('привет', hello_command)
