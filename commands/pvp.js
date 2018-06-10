const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let user1 = message.guild.members.get(args[0]);
	let user2 = message.guild.members.get(args[1]);

	if(!user2) return message.channel.send("Please provide who you want to fight!");
	if(args[0] === "help") return message.channel.send("Command usage: `!pvp <user1> <user2>`");

	let results = [`${user1} got a combo on ${user2} and now ${user2} is down on 3HP but ${user2} managed to escape!`, `${user1} got a combo and killed ${user2}`, `${user2} got a combo and killed ${user1}`, `${user2} got a combo on ${user1} and now ${user1} is down on 6HP but ${user1} managed to escape!`];

	let result = Math.floor((Math.random() * results.length));

	let pvpEmbed = new Discord.RichEmbed()
	.setDescription("**PvP match has began**")
	.setColor("#FF0000")
	.addField(`${user1.id} ⚔ ${user2.id}`, results[result]);

	message.channel.send(pvpEmbed);

}

module.exports.conf = {
	aliases: []
}

module.exports.help = {
	name: "pvp"
}
