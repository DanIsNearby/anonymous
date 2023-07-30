require('dotenv').config();
const { Telegraf } = require('telegraf');
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

bot.on('text', async ctx => {
    if (ctx.message.chat.type === 'private') {
        const content = ctx.message.chat.text
        const userId = ctx.message.from.id
        const userId2 = 5748601508
        const chatId = 6443812256
        bot.telegram.getChatMember(chatId, userId).then((chatMember) => {
            if (chatMember && chatMember.status === `member`){
                console.log(`User is a member of that group chat #1`)
            }else{
                console.log(`User is not a member of that group chat #1`) 
            }
        })
        bot.telegram.getChatMember(chatId, userId2).then((chatMember) => {
            if (chatMember && chatMember.status === `member`){
                console.log(`User is a member of that group chat #2`)
            }else{
                console.log(`User is not a member of that group chat #2`)
            }
        })
    }
})

bot.launch();