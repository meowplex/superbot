export function get_logger_action(){
    return (context) => {
        console.log(`New message from ${context.messengerId}`)
    }
}