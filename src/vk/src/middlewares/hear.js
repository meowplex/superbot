import { hearManager, vkBot } from "../index.js";

export function setup_hear_middleware()
{
    vkBot.updates.on('message', hearManager.middleware);
}