import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { vk_hello_command } from "./commands/hello.js";

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

vkBot.updates.on('message', hearManager.middleware);

hearManager.hear(/^(?:hello|привет)$/i, vk_hello_command)