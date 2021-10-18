export default function logger_middleware(context) {
    console.log(`New message from ${context.messengerId}`)
}