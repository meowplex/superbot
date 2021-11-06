import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';

import {
    hello_command,
    calculate_command,
    weather_command,
    recognize_text_command,
    nickname_command
} from "./actions/commands/index.js";

import {
    superbot_context_middleware
} from './actions/middlewares/index.js';

const vkBot = new VK({
    token: process.env.VK_TOKEN
});

const hearManager = new HearManager();

//middlewares
vkBot.updates.on('message_new', superbot_context_middleware)
vkBot.updates.on('message_new', hearManager.middleware);

//commands
hearManager.hear(/^(?:hello|привет)/i, hello_command)
hearManager.hear(/^(?:calculate|посчитай) (.*)$/i, calculate_command)
hearManager.hear(/^(?:weather|погода) (.*)$/i, weather_command)
hearManager.hear(/^распознай$/i, recognize_text_command)
hearManager.hear(/^(?:nickname|никнейм)(?: ([\s\S]+?))?$/i, nickname_command)

export { vkBot as default };
