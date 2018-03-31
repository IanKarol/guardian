const Discord = require('discord.js');

module.exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x3393FF)
    .addField('Here you go!', 'https://discordapp.com/oauth2/authorize?client_id=407179814974259200&scope=bot&permissions=2146958591')
    .addField('Join the official Guardian Discord Server!', 'https://discord.gg/PCYKcWq');
  message.author.send({ embed });
  if (message.channel.type === 'dm') return;
  message.reply('Check your Direct Messages!');
};

module.exports.help = {
  name: "invite"
}
