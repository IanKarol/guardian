const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = async (client, message) => {
  const { body } = await superagent
    .get('https://random.cat/meow');

  const embed = new Discord.MessageEmbed()
    .setDescription(':cat: MEOW MEOW HISS SCRATCH!')
    .setImage(body.file)
    .setColor(0xD0D3D4);

  message.channel.send(embed);
};
