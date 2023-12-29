/*
const express = require('express');
const app = express();

app.get('/', async function(req, res) {
	res.send('Hello World!');
});

app.listen(3000, async function() {
	console.log('Example app listening on port 3000!');
});
*/
const ReplCraft = require('replcraft');
/* const Discord = require('discord.js');

let dc = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] }); */
let client = new ReplCraft();
/*
dc.on('ready', () => {
	console.log(`Logged in as ${dc.user.username}`);
});

dc.on('messageCreate', async (msg) => {
	if (msg.author.id === dc.user.id) return;

	if (msg.content.toLowerCase().startsWith("~cobblegen")) {
		client.setBlock(2, 0, 1, 'minecraft:lava');
		msg.reply("Cobblestone generated!");
	};
	
	if (msg.content.toLowerCase().startsWith("~cobblestop")) { 
		client.setBlock(2, 0, 1, 'minecraft:air'); 
		msg.reply('done;')
	};

}); 

dc.login(process.env.dcToken); */

(async () => {
	client.retryOnFuelError(true);
	client.on("outOfFuel", ex => {
		console.warn("Retrying on Out Of Fuel: ", ex.toString());
	});

	try {
		await client.login(process.env.token);
		await client.setBlock(2, 0, 1, 'minecraft:air');
	} catch (error) {
		console.error(error);
	};
});