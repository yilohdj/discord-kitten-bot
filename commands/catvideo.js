const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('catvideo')
		.setDescription('a quick cat fix'),
	async execute(interaction) {
		x = (Math.ceil(Math.random() * 10));
		if (x === 1){
			await interaction.reply('https://www.youtube.com/watch?v=tpiyEe_CqB4');
		}
		if (x === 2){
			await interaction.reply('https://www.youtube.com/watch?v=W6rmYlrU4lI');
		}
		if (x === 3){
			await interaction.reply('https://www.youtube.com/watch?v=EAV6J6hE9rk');
		}
		if (x === 4){
			await interaction.reply('https://www.youtube.com/watch?v=XAXwmMu8otM');
		}
		if (x === 5){
			await interaction.reply('https://www.youtube.com/watch?v=7yLxxyzGiko');
		}
		if (x === 6){
			await interaction.reply('https://www.youtube.com/watch?v=w1OBCLH79Sc');
		}
		if (x === 7){
			await interaction.reply('https://www.youtube.com/watch?v=j1Oegd_pLUk');
		}
		if (x === 8){
			await interaction.reply('https://www.youtube.com/watch?v=0xqkksHov58');
		}
		if (x === 9){
			await interaction.reply('https://www.youtube.com/watch?v=1J0C2HlC38c');
		}
		if (x === 10){
			await interaction.reply('https://www.youtube.com/watch?v=SQJrYw1QvSQ');
		}
	},
}