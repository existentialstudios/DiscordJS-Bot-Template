const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Reply with PONG!'),
    async execute(interaction) {
        await interaction.reply('PONG!');
    },
};