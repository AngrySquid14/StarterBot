const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'localhost',//change to the ip
  port: 25565,// change to the port you want
  username: 'Player', //change to the username of the account
  password: 'password'//change to the password of the account
})

const bot = mineflayer.createBot(options)

bot.once('spawn', () => {
  bot.chat('hi!')
})




//this is tristian's phone number
//206-8673452