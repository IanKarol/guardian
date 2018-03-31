const Discord = require('discord.js');

module.exports.run = (client, message) => {
  const answer = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .addField("🎲", `You rolled ${answer}!`);
  message.channel.send({ embed });
};


const answers = [
  '0 (unlucky isn\'t it?',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
];

module.exports.help = {
  name: "dice"
}
