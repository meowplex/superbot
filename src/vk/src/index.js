import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { hello_command } from "./commands/hello.js";
import { setup_hear_middleware } from "./middlewares/hear.js";

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

export function startVkBot()
{
    // middlewares
    setup_hear_middleware();
    // commands
    hello_command();

    // start polling
    vkBot.updates.start().catch(err => console.error('VK Bot launch error:', err));
    console.log('VK Bot is up and running');
}