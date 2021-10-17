//import mongoose from "mongoose"
import { start_vk_bot } from "./vk/src/index.js";
import { start_tg_bot } from "./tg/src/index.js";


const main = async () => {
    // connect to db
    //await mongoose.connect(process.env.MONGODB_URL);

    // start bots
    start_tg_bot()
    start_vk_bot();
}

main()