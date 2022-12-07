const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('are-you-gorilla')
    .setDescription(' ask him if he is a gorilla'),
    async execute(interaction,client){
        const message = await interaction.deferReply({
            fetchReply:true
        })
        const newMessage = " yeah bro , Im gorilla .... trust me "
        await interaction.editReply({
            content:newMessage
        })
    }
}