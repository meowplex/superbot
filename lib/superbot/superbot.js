import { Command } from "./command.js";

export class SuperBot {
    constructor(){
        this.commands = [];
    }

    /**
     * 
     * @param {(context) => {}} fn 
     */
    use(fn){
        this.commands.push(new Command('', fn))
    }

    /**
     * 
     * @param {String} trigger - command name
     * @param {(context) => {}} fn 
     */
    on(trigger, fn){
        this.commands.push(new Command(trigger, fn))
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
                await command.fn(context)
            }
            if (context.isRunning == false){
                return context.response;
            }
        }
        return context.response;
    }
}