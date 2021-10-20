import mongoose from "mongoose"
import vkBot from "./vk/index.js";
import tgBot from "./tg/index.js";

const main = async () => {
    // connect to db
    // let db = await mongoose.connect(process.env.MONGODB_URL);

    // start bots
    tgBot.launch().catch(err => console.error('TG Bot launch error:', err));
    console.log('TG Bot is up and running');

    vkBot.updates.start().catch(err => console.error('VK Bot launch error:', err));
    console.log('VK Bot is up and running');

    // Enable graceful stop
    process.once('SIGINT', () => {
        tgBot.stop('SIGINT')
        vkBot.updates.stop()
    })
    process.once('SIGTERM', () => {
        tgBot.stop('SIGTERM')
        vkBot.updates.stop()
    })
}

main()