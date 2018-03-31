const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!tomute) return message.send("Couldn't find user.");
  if(tomute.hasPermission("BAN_MEMBERS", "KICK_MEMBERS")) return message.send("Can't mute that user!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role

  let mutetime = args[1];
  if(!mutetime) return message.send("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.channel.send(`${tomute.user.tag} has been muted.`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`${tomute.user.tag} has been unmuted`);
  }, ms(mutetime));

  //end of module
}

module.exports.help = {
  name: "tempmute"
}
