const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wtf')
        .setDescription('Describe WhatTheEfffKoala!'),
    async execute(interaction) {
        await interaction.reply('I\'m the WhatTheEfffMan Team Mascot!');
    },
};