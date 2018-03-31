const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!say <message>
  //Hi

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use that command.");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);

}

module.exports.help = {
  name: "say"
}
