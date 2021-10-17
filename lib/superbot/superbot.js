import { Command } from "./command.js";

export class SuperBot {
    constructor(){
        this.commands = [];
    }

    /**
     * 
     * @param {(context) => {}} action 
     */
    use(action){
        this.commands.push(new Command('', action))
    }

    /**
     * 
     * @param {String} trigger - command name
     * @param {(context) => {}} action 
     */
    on(trigger, action){
        this.commands.push(new Command(trigger, action))
    }

    /**
     * 
     * @param {String} trigger 
     * @param {(context) => {}} context 
     * @returns {Resp}
     */
    async run(trigger, context){
        for (let i = 0; i < this.commands.length; i++){
            let command = this.commands[i]
            if (command.trigger == '' || command.trigger == trigger){
                await command.action(context)
            }
            if (context.isRunning == false){
                return context.response;
            }
        }
        return context.response;
    }
}