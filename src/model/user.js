export class User {

    id;
    username;

    /**
     * @param {int} id 
     * @param {String} username 
     */
    constructor(id, username){
        this.id = id;
        this.username = username;
    }

    /**
     * @param {JSON} object 
     * @returns User object
     */
    static fromJSON(object){
        return new User(object.id, object.username);
    }

    toJSON() {
        return {
            'id': this.id,
            'username': this.username,
        }
    }

    toString() {
        return `User(username: , id: ${this.id}, username: ${this.username}`;
    }
}