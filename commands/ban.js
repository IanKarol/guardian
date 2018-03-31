const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS", "KICK_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("BAN_MEMBERS", "KICK_MEMBERS")) return message.channel.send("That user can't be banned!");

    let bicon = bot.user.displayAvatarURL;
    let banEmbed = new Discord.RichEmbed()
    .setAuthor("Discord Guardian", bicon)
    .setDescription("~Ban~")
    .setFooter(`ID: ${bUser.id}`)
    .setColor("#7289DA")
    .addField("User", `${bUser}` , true)
    .addField("Moderator", `<@${message.author.id}>`, true)
    .addField("Reason", bReason, true);

    let banChannel = message.guild.channels.find(`name`, "modlog");
    if(!banChannel) return message.channel.send("Couldn't find modlog channel.");

    message.guild.member(bUser).ban(bReason);
    message.delete().catch(O_o=>{});
    banChannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}
