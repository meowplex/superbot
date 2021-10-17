import { Telegraf } from 'telegraf';
import { get_hello_action } from "./actions/hello.js";

export const tgBot = new Telegraf(process.env.TG_TOKEN);

// middlewares
// commands
tgBot.hears('привет', get_hello_action())