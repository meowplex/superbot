//import mongoose from "mongoose"
import { startVkBot } from "./vk/src/index.js";
import { start_tg_bot } from "./tg/src/index.js";

const main = async () => {
    // connect to db
    //console.log(process.env.MONGODB_URL)
    //await mongoose.connect(process.env.MONGODB_URL);

    // start bots
    start_tg_bot()
    //startVkBot();
}

main()