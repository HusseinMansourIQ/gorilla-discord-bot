require("dotenv").config()
const { token } = process.env
const { Client, Collection, GatewayIntentBits } = require("discord.js")
const fs = require("fs")


const client = new Client({ intents: GatewayIntentBits.Guilds })
client.commands = new Collection()
client.commandArray = []
const functionsFolder = fs.readdirSync('./functions')

for (const folder of functionsFolder) {
    const functionsFile =fs.readdirSync(`./functions/${folder}`).filter(file => file.endsWith('.js')) 
for( const file of functionsFile) {
    require(`./functions/${folder}/${file}`)(client);
} 
}
client.handleEvents()
client.handleCommands()
client.login(token)
//fs.readdirSync('./functions/${folder}').filter(file => file.endsWith('.js'))