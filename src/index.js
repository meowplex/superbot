import mongoose from "mongoose"
import { startVkBot } from "./vk/index.js";

const main = async () => {
    // connect to db
    console.log(process.env.MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL);

    // start bots
    startVkBot();
}

main()