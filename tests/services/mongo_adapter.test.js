import mongoose from 'mongoose';
import { MongoAdapter } from '../../src/services/mongo_adapter.js';

const schema = new mongoose.Schema({ name: String, id: Number });
const model = new mongoose.model('model', schema);


test('mongo adapter test', async () => {
    await mongoose.connect('mongodb://localhost:27017/superbot_test')
    const db = new MongoAdapter(model);
    const user = await db.create({
        name: "Trard",
        id: 2
    })
    const user1 = await db.get({ id: 2 });
    await mongoose.disconnect();
    expect(user.username).toBe(user1.username);
});