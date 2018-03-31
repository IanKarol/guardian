const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!clear <num of messages to delete>

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("oof.");
  if(!args[0]) return message.channel.send("Usage: !clear <number of messages to clear>");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
