import { User } from "../../src/model/user.js";

let user = new User(1, 'Nick');
let json = user.toJSON();
let user1 = User.fromJSON(json);

test('user == user1', () => {
    expect(user.toString()).toEqual(user1.toString());
})