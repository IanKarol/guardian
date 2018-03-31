const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @user <role name>
  if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.channel.send("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specifly a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("User already have that role.");
  await(rMember.addRole(gRole.id));

  message.channel.send(`Congrats to <@${rMember.id}>, you have been given the role ${gRole.name}.`)
}

module.exports.help = {
  name: "addrole"
}
