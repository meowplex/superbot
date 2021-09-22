import mongoose from "mongoose"

const main = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
}

main()