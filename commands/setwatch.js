const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('274904618474012674')) return message.channel.send("Huh.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription('<:dmark:426081717242298370> Name watching status!');
    message.channel.send({ embed });
  }
  
  else if (status.length !== 0) {
  client.user.setActivity(`${status}`, {  type: "WATCHING"});
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription('<:cmark:426081678784462888> You sucessfully changed watching status');
  message.channel.send({ embed });
}};

module.exports.help = {
  name: "watch"
}
