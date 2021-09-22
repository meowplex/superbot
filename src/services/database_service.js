import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    id: Number,
    username: String
});

const UserModel = mongoose.model('User', usersSchema)

export class Database {

    constructor() {
        if (mongoose.connection.readyState != 1)
            throw Exception("mongoose dont connected")
    }

    async get(params) {
        const response = await UserModel.findOne(params);
        return response;
    }

    async create(params) {
        const newUser = new UserModel(params);
        await newUser.save();
        return newUser;
    }

    async update(oldParams, newParams) {
        const response = await UserModel.updateOne(oldParams, newParams);
        return response;
    }

}



