export class Context {

    constructor(messengerName, messengerId, text){
        this.messengerId = `${messengerName}-${messengerId}`
        this.isRunning = true;
        this.text = text
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