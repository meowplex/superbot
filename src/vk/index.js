import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { vk_hello_command } from "./commands/hello.js";

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

export function startVkBot() {
    vkBot.updates.on('message', hearManager.middleware);
    hearManager.hear(/^(?:hello|привет)$/i, vk_hello_command)

    // start polling
    vkBot.updates.start().catch(err => console.error('VK Bot launch error:', err));
    console.log('VK Bot is up and running');
}