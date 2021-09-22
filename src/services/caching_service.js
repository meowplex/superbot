import { Collection } from "../model/collection.js";

export class CachingService {
    /**
     * Mab object that stores the objects
     */
    cache;

    /**
     * Limit on the number of stored objects 
     */
    limit;

    /**
     * The current number of stored objects 
     */
    count;

    constructor(limit) {
        this.limit = limit;
        this.count = 0;
        this.cache = new Collection()
    }

    /**
     * @param {String} key 
     * @returns value for the key
     */
    get(key) {
        return this.cache.get(key);
    }

    /**
     * @param {String} key 
     * @param {JSON} value 
     */
    set(key, value) {
        if (this.cache.has(key) == false) {
            this.count += 1;
        }
        if (this.count > this.limit) {
            this.cache.delete(this.cache.firstKey());
            this.count -= 1;
        }
        this.cache.set(key, value);
    }

    /**
     * @param {String} key 
     * @returns boolean - is there an element with a this key 
     */
    has(key) {
        return this.cache.has(key)
    }
}