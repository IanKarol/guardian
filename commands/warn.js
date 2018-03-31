const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @user <reason>

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!wUser) return message.channel.send("Couldn't find user.");
  if(wUser.hasPermission("MANAGE_MESSAGES", "KICK_MEMBERS")) return message.channel.send("That person can't be warned.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setAuthor("Discord Guardian", bot.user.displayAvatarURL)
  .setDescription("~Warn~")
  .setColor("#7289DA")
  .addField("User", `<@${wUser.id}>`, true)
  .addField("Moderator", `<@${message.author.id}>`, true)
  .addField("Reason", reason, true);

  let warnchannel = message.guild.channels.find(`name`, "modlog");
  if(!warnchannel) return message.channel.send("Couldn't find modlog channel.");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 5){
    let muterole = message.guild.roles.find(`name`, "Muted");

    let mutetime = "12h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`User <@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))

  }

  if(warns[wUser.id].warns == 8){
    message.guild.member(wUser).kick(reason);
    message.channel.send(`${wUser.tag} has been kicked.`)
  }


}

module.exports.help = {
  name: "warn"
}
