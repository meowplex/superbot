import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';

import {
    hello_command,
    sum_command
} from "./actions/commands/index.js";

import {
    superbot_context_middleware
} from './actions/middlewares/index.js';

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

//middlewares
vkBot.updates.on('message_new', superbot_context_middleware)
vkBot.updates.on('message_new', hearManager.middleware);

//commands
hearManager.hear(/^(?:hello|привет)$/i, hello_command)
hearManager.hear(/^(?:sum|сложи)/i, sum_command)