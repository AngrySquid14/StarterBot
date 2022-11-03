const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '147.135.105.184',//change to the ip
  port: 25590,// change to the port you want
  username: 'AngrySquid14', //change to the username of the account
  password: undefined,//change to the password of the account
  auth: 'microsoft'
})

bot.once('spawn', () => {
  bot.chat('hi!')
})


