export class Collection extends Map {

    /**
     * @returns the first key(s) in this collection.
     */
    firstKey() {
        return this.keys().next().value;
    }

    /**
     * @returns the last key(s) in this collection.
     */
    lastKey() {
        const arrayKeys = [...this.keys()];
        return arrayKeys[arrayKeys.length - 1];
    }
}