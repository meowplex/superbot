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
     * @param {String} command_name - command name
     * @param {(context) => {}} action 
     */
    on(command_name, action){
        this.commands.push(new Command(command_name, action))
    }

    /**
     * 
     * @param {String} command_name 
     * @param {(context) => {}} context 
     * @returns {Resp}
     */
    async run(command_name, context){
        for (let i = 0; i < this.commands.length; i++){
            let command = this.commands[i]
            if (command.command_name == '' || command.command_name == command_name){
                await command.action(context)
            }
            if (context.isRunning == false){
                return context.response;
            }
        }
        return context.response;
    }
}