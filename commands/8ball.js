const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!8ball <question>
  if(!args[2]) return message.channel.send("Please ask a full question!");
  let replies = ["Yes.", "No.", "Maybe.", "I don't think so.", "Ask again later.", "Live and you will see!"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor("Discord Guardian", bot.user.displayAvatarURL)
  .setColor("#7289DA")
  .addField("Question", question)
  .addField("Answer", replies[result])
  .setFooter(message.author.tag);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
