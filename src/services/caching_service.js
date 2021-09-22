export class CachingService {
    /**
     * Mab object that stores the objects
     */
    cache = new Map();

    /**
     * Limit on the number of stored objects 
     */
    limit;

    /**
     * The current number of stored objects 
     */
    count = 0;

    constructor(limit){
        limit = limit;
    }


}