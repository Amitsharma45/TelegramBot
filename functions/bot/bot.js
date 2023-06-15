const { Telegraf } = require('telegraf');

const bot = new Telegraf('6021828179:AAHF4vbJFr3zeWBfaTc6bP4lGzlU7Ry7N8o');

bot.start((ctx) => ctx.reply(`Welcome, This is my first Bot!
/hi
`));
bot.command('hi',(ctx)=>{
    console.log(ctx.message.text)
    ctx.reply('Hello Bye')})
bot.launch();