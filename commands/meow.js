const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('meow')
		.setDescription('a special little surprise'),
	async execute(interaction) {
		await interaction.reply('woof!');
	},
}