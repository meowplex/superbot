export class Context {

    constructor(messengerName, messengerId){
        this.messengerName = messengerName
        this.messengerId = messengerId
        this.isRunning = true;
    }

    /**
     * 
     * @param {Resp} res 
     */
    reply(res){
        this.isRunning = false;
        this.response = res;
    }

}