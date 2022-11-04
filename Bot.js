const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '147.135.105.184', // minecraft server ip
  username: 'jackwill8808@outlook.com', // minecraft username
  //password: 'undefined', // minecraft password, comment out if you want to log into online-mode=false servers
  port: 25590,                // only set if you need a port that isn't 25565
  version: '1.19.2',             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  auth: 'microsoft'              // only set if you need microsoft auth, then set this to 'microsoft'
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

//bot.on('chat', (username, message) =>{
//  if (username === "AngrySquid14") {
//    if (message === 'attack me') {
//      bot.attack(username)
//    }
//  }
//})


