import { CachingService } from "../../src/services/caching_service.js";

let service = new CachingService(3);

service.set('key1', 'value1');

console.log(`first value is 'value1 : ${service.get('key1') == 'value1'} (expected true)`);

service.set('key2', 'value2');

service.set('key3', 'value3');

service.set('key4', 'value4');

console.log(`Now, first element is null : ${service.get('key1') == null} (expected true)`);

console.log(`count == length: ${service.cache.values().length == service.count} (expected true)`);