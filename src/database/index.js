import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
    vk_id: Number,
    tg_id: Number,
    nickname: String,
})

const UsersModel = mongoose.model('UsersModel', UsersSchema);


export class Database {

    /**
     * 
     * @param {String} url 
     */
    static async connect(url) {
        await mongoose.connect(url)
    }

    /**
     * 
     * @param {{
     * vk_id: Number,
     * tg_id: Number,
     * nickname: String
     * }} params 
     */
    async createUser(params) {
        this._validateParams(params)
        let res = await UsersModel.create(params)
        return res
    }

    async updateUser(oldParams, newParams){
        let res = await UsersModel.updateOne(oldParams, newParams)
        return res
    }

    async updateUsers(oldParams, newParams){
        let res = await UsersModel.updateMany(oldParams, newParams)
        return res
    }

    async findUser(params){
        let res = await UsersModel.findOne(params)
        return res
    }

    async findUsers(params){
        let res = await UsersModel.find(params)
        return res
    }

    _validateParams(params) {
        if (params.vk_id == null && params.tg_id == null)
            throw new Error('none of the id was specified')
        if (!params.nickname)
            params.nickname = "User"
    }



}