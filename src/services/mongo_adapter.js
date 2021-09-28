import mongoose from "mongoose";

export class MongoAdapter {

    constructor(mongoseModel) {
        if (mongoose.connection.readyState != 1) {
            throw new Error("mongoose dont connected")
        }
        this.model = mongoseModel;
    }

    /**
     * 
     * @param {JSON} params 
     * @returns Database entry with these parameters 
     */
    async get(params) {
        const response = await this.model.findOne(params);
        return response;
    }

    /**
     * 
     * @param {JSON} params 
     * @returns The created entry in the database
     */
    async create(params) {
        const response = await this.model.create(params);
        return response;
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



