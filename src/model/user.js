export class User {

    id;
    username;

    toJSON(){
        return {
            'id': this.id,
            'username': this.username,
        }
    }

    toString(){
        return `User(username: , id: ${this.id}, username: ${this.username}`;
    }
}