import { Context } from "../../../../lib/superbot/index.js";
import { Messengers } from "../../../../utils/messengers.js";

export function create_superbot_context_middleware(context, next){
    let ctx = new Context(Messengers.vk, context.senderId)
    context.ctx = ctx
    next()
}