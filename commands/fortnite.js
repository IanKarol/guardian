const Discord = require("discord.js");
const Fortnite = require('fortnite');
const stats = new Fortnite('apikey.fortnite');

module.exports.run = async (bot, message, args, tools) => {

  let platform;
  let username;

  if (!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send('**Please include the platform: `!fortnite [pc | xbl | psn] <username>`**');
  if (!args[1]) return message.channel.send('**Please include the username: `!fortnite [pc \ xbl | psn]` <username>**');

  platform = args.shift();
  username = args.join(' ');

  stats.getInfo(username, platform).then( data => {

    let embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setAuthor("Discord Guardian", bot.user.displayAvatarURL)
    .setFooter("Powered by fortnitetracker.com")
    .setTitle(`${data.username}\'s Stats`)
    .setDescription(`**Top Placement**\n\n**Top 3s:** **${data.lifetimeStats[0].value}**\n**Top 5s:** **${data.lifetimeStats[1].value}**\n**Top 25s:** **${data.lifetimeStats[5].value}**`, true)
    .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
    .addField("Total Score", data.lifetimeStats[6].value, true)
    .addField("Matches Played", data.lifetimeStats[7].value, true)
    .addField("Wins", data.lifetimeStats[8].value, true)
    .addField("Win Percentage", data.lifetimeStats[9].value, true)
    .addField("Kills", data.lifetimeStats[10].value, true)
    .addField("K/D Ratio", data.lifetimeStats[11].value, true)
    .addField("Kills Per Minute", data.lifetimeStats[12].value, true)
    .addField("Time Played", data.lifetimeStats[13].value, true)
    .addField("Average Survival Time", data.lifetimeStats[14].value, true)

    message.channel.send(embed);

  })
  .catch(error => {

    message.channel.send('Couldn\'t find username in the database.');

  })

}

module.exports.help = {
  name: "fortnite"
}
