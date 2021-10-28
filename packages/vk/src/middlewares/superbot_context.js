import { Context } from "../../../../superlib/index.js";
import { Messengers } from "../../../../utils/messengers.js";

export default function superbot_context_middleware(context, next) {
    let cctx = new Context(Messengers.vk, context.senderId, context.text)
    context.cctx = cctx
    next()
}