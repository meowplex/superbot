import { Telegraf } from 'telegraf';
import { tg_hello_command } from "./commands/hello.js";

export const tgBot = new Telegraf(process.env.TG_TOKEN);

tgBot.hears('привет', tg_hello_command)