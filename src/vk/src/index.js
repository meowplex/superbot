import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { get_hello_action } from "./actions/hello.js";

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

export function startVkBot()
{
    // middlewares
    vkBot.updates.on('message', hearManager.middleware);
    // commands
    hearManager.hear(/^(?:hello|привет)$/i, get_hello_action())

    // start polling
    vkBot.updates.start().catch(err => console.error('VK Bot launch error:', err));
    console.log('VK Bot is up and running');
}