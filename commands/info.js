const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("Discord Guaridan", bicon)
    .setColor("#7289DA")
    .addField("Version", "1.0.0", true)
    .addField("Library", "eris", true)
    .addField("Creator", "Fenix™#6467", true)
    .addField("Servers", bot.guilds.size, true)
    .addField("Users", bot.users.size, true)
    .addField("Website", "[guardian.com](http://guardianbot.weebly.com)", true)
    .addField("Invite", "[guardian.com/invite](http://guardianbot.weebly.com/invite)", true)
    .addField("Discord", "[guardian.com/discord](http://guardianbot.weebly.com/discord)", true)
    .addField("Donate", "[guardian.com/donate](http://guardianbot.weebly.com/donate)", true)
    .addField("Contributors", "`Chinese_Marc#5516` - Code specialist\n`Dominic#0609` - Community Overseer")
    .addField("Honorable Mentions", "`K0WALSK1™#4430` - Motivating me to build this");

    message.channel.send(botembed);
}

module.exports.help = {
  name: "info"
}
