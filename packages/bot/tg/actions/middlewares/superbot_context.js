import { Context } from "../../../../../lib/core/index.js";
import { Messengers } from "../../../../../utils/messengers.js";

export default function superbot_context_middleware(context, next) {
    let cctx = new Context(Messengers.tg, context.update.message.from.id)
    context.cctx = cctx
    next()
}