export default function logger_middleware(cctx) {
    console.log(`New message from ${cctx.messengerId}`)
}