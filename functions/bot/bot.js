const { Telegraf } = require('telegraf');

const bot = new Telegraf('6021828179:AAHF4vbJFr3zeWBfaTc6bP4lGzlU7Ry7N8o');

bot.start(ctx => {
  console.log("Received /start command")
  try {
    return ctx.reply("Hi")
  } catch (e) {
    console.error("error in start action:", e)
    return ctx.reply("Error occured")
  }
})
bot.command('/DSA',(ctx)=>{
    ctx.reply('I am working on this feature!')
})
bot.on('sticker',ctx=>ctx.reply('🖥️'))

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}