import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { get_hello_action } from "./actions/hello.js";

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

vkBot.updates.on('message', hearManager.middleware);

hearManager.hear(/^(?:hello|привет)$/i, get_hello_action())