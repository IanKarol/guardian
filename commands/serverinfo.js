const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${message.guild.createdAt}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Region", message.guild.region, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Members", message.guild.memberCount, true)
   .addField("Humans", "aa", true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", message.guild.members.filter(m => m.user.online).size, true)
   .addField("Roles", message.guild.roles.size, true);

   message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
