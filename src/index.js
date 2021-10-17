import mongoose from "mongoose"
import { startVkBot } from "./vk/index.js";

const main = async () => {
    // connect to db
    await mongoose.connect(process.env.MONGODB_URL);

    // start bots
    startVkBot();
}

main()