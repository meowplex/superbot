import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';
import { hello_command } from "./actions/commands/hello.js";
import { create_superbot_context_middleware } from './actions/middlewares/create_superbot_context.js';
import { weather_command } from './actions/commands/weather.js';

export const vkBot = new VK({
    token: process.env.VK_TOKEN
});

export const hearManager = new HearManager();

vkBot.updates.on('message_new', create_superbot_context_middleware)
vkBot.updates.on('message_new', hearManager.middleware);


hearManager.hear(/^(?:hello|привет)$/i, hello_command)
hearManager.hear(/^(?:weather|погода)$/, weather_command)