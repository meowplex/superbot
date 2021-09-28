import mongoose from 'mongoose';
import { MongoAdapter } from '../../src/services/mongo_adapter';

test('database test', async () => {
    await mongoose.connect('mongodb://localhost:27017/superbot-test')
    const db = new MongoAdapter();
    const user = await db.create({
        id: 1,
        username: 'Nick'
    })
    const user1 = await db.get({ id: 1 });
    await mongoose.disconnect();
    expect(user.username).toBe(user1.username);
});

