const { Telegraf } = require('telegraf');
const axios = require('axios');
const bot = new Telegraf('6021828179:AAHF4vbJFr3zeWBfaTc6bP4lGzlU7Ry7N8o');

const binarytree= `function binarySearch(arr, x) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0;
    let hi = arr.length - 1;
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] === x) return mid;
        if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,5,7,8,9,13,16,17,20,22,25,26], 33))
;`
bot.start(ctx => {
  console.log("Received /start command")
  try {
    return ctx.reply("Hi")
  } catch (e) {
    console.error("error in start action:", e)
    return ctx.reply("Error occured")
  }
})

bot.command('binarytreejs', async function (ctx) {
    
    return ctx.reply(binarytree);
})

bot.command('dsa',(ctx)=>{
    console.log('in side DSA')
    return ctx.reply('I am working on this feature!')
})
bot.on('sticker',(ctx) => {return ctx.reply('🖥️')})
// bot.on('sticker', (ctx) => ctx.reply('❤️'));

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

// bot.launch()