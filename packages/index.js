import mongoose from "mongoose"
import { vkBot } from "./vk/src/index.js";
import { tgBot } from "./tg/src/index.js";

const main = async () => {
    // connect to db
    let db = await mongoose.connect(process.env.MONGODB_URL);
    console.log(db)

    // start bots
    tgBot.launch().catch(err => console.error('TG Bot launch error:', err));
    console.log('TG Bot is up and running');
    
    vkBot.updates.start().catch(err => console.error('VK Bot launch error:', err));
    console.log('VK Bot is up and running');

    // Enable graceful stop
    process.once('SIGINT', () => tgBot.stop('SIGINT'))
    process.once('SIGTERM', () => tgBot.stop('SIGTERM'))
}

main()