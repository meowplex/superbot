import mongoose from "mongoose";

export class MongoAdapter {

    /**
     * 
     * @param {Model} mongoseModel 
     * @returns {MongoAdapter} object
     */
    static byModel = async(mongoseModel) => {
        if (mongoose.connection.readyState == 0) {
            throw new Error("mongoose dont connect")
        }

        while (mongoose.connection.readyState == 2){
            console.log("failed to connect to mongoose, retrying after 3 seconds")
            await new Promise(r => setTimeout(r, 3000));
        }
        return new MongoAdapter(mongoseModel)
    }

    constructor(mongoseModel) {
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
        const response = await this.model.updateOne(oldParams, newParams);
        return response;
    }

}



