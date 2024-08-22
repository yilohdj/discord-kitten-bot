const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('surprise')
		.setDescription('a surprise meow!'),
	async execute(interaction) {
		await interaction.deferReply();
		time = (Math.floor(Math.random() * 10) * 1000) + 1000;
		await wait(time);
		await interaction.editReply('meow!');
	},
}