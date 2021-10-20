import { Telegraf } from 'telegraf';

import {
    hello_command,
    sum_command,
    weather_command
} from "./actions/commands/index.js";

import {
    superbot_context_middleware
} from './actions/middlewares/index.js';


const tgBot = new Telegraf(process.env.TG_TOKEN);

//middlewares
tgBot.use(superbot_context_middleware)

//commands
tgBot.hears(/^(?:hello|привет)/i, hello_command)
tgBot.hears(/^(?:sum|сложи) ([0-9 ]*)/i, sum_command)
tgBot.hears(/^(?:weather|погода) (.*)$/i, weather_command)

export { tgBot as default };

