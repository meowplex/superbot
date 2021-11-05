import { Telegraf } from 'telegraf';

import {
    hello_command,
    calculate_command,
    weather_command
} from "./src/commands/index.js";

import {
    superbot_context_middleware
} from './src/middlewares/index.js';


const tgBot = new Telegraf(process.env.TG_TOKEN);

//middlewares
tgBot.use(superbot_context_middleware)

//commands
tgBot.hears(/^(?:hello|привет)/i, hello_command)
tgBot.hears(/^(?:calculate|посчитай) (.*)$/i, calculate_command)
tgBot.hears(/^(?:weather|погода) (.*)$/i, weather_command)

export { tgBot as default };

