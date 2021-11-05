import { Resp, SuperBot, Context } from "../index.js"

// Bot configuration

const bot = new SuperBot()

bot.use((context) => {
    console.log(context.messengerId)
})
bot.on('hello', (context) => {
    context.reply(new Resp('Hello world'))
})
bot.on('random', (context) => {
    let number = Math.random()
    context.reply(new Resp(`Your number ${number}`))
})

// Imitation of work with social networks

const main = async() => {
    // get a message from user, create context
    let context = new Context('vkontakte', 12345)
    // middleware chain run
    let response = await bot.run('random', context)
    //send a message for user
    console.log(`Response: ${response.text}`)
}

main()