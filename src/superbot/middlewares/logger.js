export function get_logger_command(){
    return (context) => {
        console.log(`New message from ${context.messengerId}`)
    }
}