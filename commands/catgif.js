const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('catgif')
		.setDescription('a quick cat gif'),
	async execute(interaction) {
		x = (Math.ceil(Math.random() * 7));
		if (x === 1){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276000747049451521/image0.gif?ex=66c7efcd&is=66c69e4d&hm=8bcbc3d6d113e4a05fd3118a3656dd20328fa748f37ff315353c0c4a146e1ba8&');
		}
		if (x === 2){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276000761956012092/image0.gif?ex=66c7efd0&is=66c69e50&hm=57c697637551740965760c67dc89d503fba2c226e5c34a43019ec78e046aadba&');
		}
		if (x === 3){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276000774593187890/image0.gif?ex=66c7efd3&is=66c69e53&hm=fb170a95712292b31461bea5a98020671f14ddcb1becca610ee995e23eab6ba2&');
		}
		if (x === 4){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276001181792997522/image0.gif?ex=66c7f034&is=66c69eb4&hm=7ace2bd860a9da9278ac8a637860450de30173ea0745c1d036a100e6e7e98870&');
		}
		if (x === 5){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276001248923095133/image0.gif?ex=66c7f044&is=66c69ec4&hm=c11145c190343dba60ae8e0b9c2fe3980050bd9c5524d4a82623e08696ebdae5&');
		}
		if (x === 6){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276001504775504002/image0.gif?ex=66c7f081&is=66c69f01&hm=cddfeff6d7751c1d7ee729a4c4910308ecb53cd48c1e909c6ab2555169f21d48&');
		}
		if (x === 7){
			await interaction.reply('https://cdn.discordapp.com/attachments/1068409566179639337/1276001657704022086/image0.gif?ex=66c7f0a6&is=66c69f26&hm=8ef6ffb0e028acaade179cdd5d9cb2ecd437d4045e8e6542f774a0bbc5b56fb9&');
		}
	},
}