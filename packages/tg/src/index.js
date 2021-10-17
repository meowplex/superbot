import { Telegraf } from 'telegraf';
import { get_hello_action } from "./actions/hello.js";

export const tgBot = new Telegraf({
    token: process.env.TG_TOKEN
});

export function start_tg_bot()
{
    // middlewares
    // commands
    tgBot.hears(/^(?:hello|привет)$/i, get_hello_action())

    // start polling
    tgBot.launch().catch(err => console.error('TG Bot launch error:', err));
    console.log('TG Bot is up and running');
}