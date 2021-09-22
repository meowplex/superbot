import mongoose from "mongoose"
import dotenv from "dotenv"


const main = async () => {
    dotenv.config();
    await mongoose.connect(process.env.MONGODB_URL);
}

main()