import { Collection } from "../../src/model/collection.js";

let collection = new Collection();

collection.set('key1', 'value1');
collection.set('key2', 'value2');

test('First key is "key1"', () => {
    expect('key1').toEqual(collection.firstKey());
    expect('key2').toEqual(collection.lastKey());
});
