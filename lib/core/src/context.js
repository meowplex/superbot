export class Context {

    constructor(messengerName, messengerId){
        this.messengerId = `${messengerName}-${messengerId}`
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