
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require("fs")

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolder = fs.readdirSync("./commands")

        for (const folder of commandFolder) {
            const commandsFile = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
            const { commands, commandArray } = client
            for (const file of commandsFile) {
                const command = require(`../../commands/${folder}/${file}`)
                commands.set(command.data.name, command)
                commandArray.push(command.data.toJSON())
                console.log(`command:${command.data.name}`)

            }
        }

        const clientId = "1049271804360917012"
        const rest = new REST({ version: '9' }).setToken(process.env.token)

        try {
            await rest.put(Routes.applicationCommands(clientId), {
                body: client.commandArray
            })

        } catch (err) {
            console.error('Error sending message:', err);
        }
    }

}
