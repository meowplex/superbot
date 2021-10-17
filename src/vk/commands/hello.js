import { Context } from "../../../lib/superbot/index.js";
import { superBot } from "../../superbot/index.js";
import { CommandNames } from "../../../utils/command_names.js";
import { Messengers } from "../../../utils/messengers.js";

export async function vk_hello_command(context) {
    let ctx = new Context(Messengers.vk, context.senderId)
    let res = await superBot.run(CommandNames.hello, ctx)
    return context.send(`${res.text}, VK`);
}
