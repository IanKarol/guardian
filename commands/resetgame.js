const Discord = require('discord.js');


module.exports.run = (client, message) => {

  if (message.author.id !== ('274904618474012674')) return;

  client.user.setActivity('Frosty Bridge');

  const embed = new Discord.RichEmbed()

    .setColor("#7289DA")

    .setDescription('<:cmark:426081678784462888> Done, changes should now take effect! Sometimes, they might not.');

  message.channel.send({ embed });

};

module.exports.help = {
  name: "resetgame"
}
