require('dotenv').config();
const { Telegraf } = require('telegraf');
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

bot.on('text', async ctx => {
    if (ctx.message.chat.type === 'private') {
        console.log(ctx.message.chat);
    }
})

bot.launch();