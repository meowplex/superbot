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

    /**
     * 
     * @param {JSON} params 
     * @returns Database entry with these parameters 
     */
    async get(params) {
        const response = await UserModel.findOne(params);
        return response;
    }

    /**
     * 
     * @param {JSON} params 
     * @returns The created entry in the database
     */
    async create(params) {
        const newUser = new UserModel(params);
        await newUser.save();
        return newUser;
    }

    /**
     * 
     * @param {JSON} oldParams 
     * @param {JSON} newParams 
     * @returns The updated entry in the database
     */
    async update(oldParams, newParams) {
        const response = await UserModel.updateOne(oldParams, newParams);
        return response;
    }

}



