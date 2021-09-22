import { CachingService } from "../../src/services/caching_service.js";

test('caching service test', () => {
    let service = new CachingService(3);
    service.set('key1', 'value1');
    expect('value1').toEqual(service.get('key1'));
    service.set('key2', 'value2');
    service.set('key3', 'value3');
    service.set('key4', 'value4');
    expect(undefined).toBe(service.get('key1'));
    expect(service.cache.size).toEqual(service.count);
});

