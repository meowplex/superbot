import { Mongoose } from "mongoose";

const mongoose = new Mongoose();

mongoose.connect();

export class Database {
    mongoose;

    constructor(mongoose){
        this.mongoose = mongoose;
    }

    get(key){
        return mongoose.model().find(key)
    }
}

