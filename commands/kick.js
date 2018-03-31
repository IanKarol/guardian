const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!kUser) return message.channel.send("Can't find user!");
   let kReason = args.join(" ").slice(22);
   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
   if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That user can't be kicked!");

   let bicon = bot.user.displayAvatarURL;
   let kickEmbed = new Discord.RichEmbed()
   .setAuthor("Discord Guardian", bicon)
   .setDescription("~Kick~")
   .setFooter(`ID: ${kUser.id}`)
   .setColor("#7289DA")
   .addField("User", `${kUser}` , true)
   .addField("Moderator", `<@${message.author.id}>`, true)
   .addField("Reason", kReason, true);

   let kickChannel = message.guild.channels.find(`name`, "modlog");
   if(!kickChannel) return message.channel.send("Couldn't find modlog channel.");

   message.guild.member(kUser).kick(kReason);
   message.delete().catch(O_o=>{});
   kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
