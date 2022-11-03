const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')

const bot = mineflayer.createBot({
  host: '95.111.249.143',//change to the ip
  port: 10000,// change to the port you want
  username: 'Botofgaming', //change to the username of the account
  password: undefined,//change to the password of the account
  version: '1.19.2'
 // auth: 'microsoft'
})

bot.once('spawn', () => {
  bot.chat('hi!')
   mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
})

bot.on('chat', (username, message) =>{
  if (username === "AngrySquid14") {
    if (message === 'attack me') {
      bot.attack(username)
    }
  }
})


