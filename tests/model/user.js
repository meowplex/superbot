import { User } from "../../src/model/user.js";

let user = new User(1, 'Nick');

let json = user.toJSON();

let user1 = User.fromJSON(json);

console.log(`user == user1 : ${user.toString() == user1.toString()} (expected true)`);