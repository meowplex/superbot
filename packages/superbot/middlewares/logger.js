export function logger_middleware(){
    return (context) => {
        console.log(`New message from ${context.messengerId}`)
    }
}