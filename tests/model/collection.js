import { Collection } from "../../src/model/collection.js";

let collection = new Collection();

collection.set('key1', 'value1');

console.log(`First key is 'key1': ${'key1' == collection.firstKey()} (expected true)`);

collection.set('key2', 'value2');

console.log(`Last key is 'key2': ${'key2' == collection.lastKey()} (expected true)`);