import { Context } from "../../../../lib/superbot/index.js";
import { Messengers } from "../../../../utils/messengers.js";

export default function superbot_context_middleware(context, next) {
    let сctx = new Context(Messengers.tg, context.update.message.from.id, context.update.message.text)
    context.сctx = сctx
    next()
}