import { superBot } from "../index.js";

export function setup_logger(){
    superBot.use((context) => {
        console.log(`New message from ${context.messengerId}`)
    })
}