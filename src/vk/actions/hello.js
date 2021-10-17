import { Context } from "../../../lib/superbot/index.js";
import { superBot } from "../../superbot/index.js";
import { Triggers } from "../../../utils/triggers.js";
import { Messengers } from "../../../utils/messengers.js";

export function get_hello_action()
{
    return async(context) =>
    {
        let ctx = new Context(Messengers.vk, context.senderId)
        let res = await superBot.run(Triggers.hello, ctx)
        return context.send(`${res.text}, VK`);
    };
}