const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send("Couldn't find user.");
  let warnlevel = warns[wUser.id].warn;

  message.channel.send(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.help = {
  name: "warnlevel"
}
