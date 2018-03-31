const Discord = require("discord.js");
const encode = require('strict-uri-encode');

module.exports.run = (client, message, args, tools) => {

  let question = encode(args.join(' '));
  let link = `https://www.lmgtfy.com/?q=${question}`;

  message.channel.send(`**${link}**`);

}

module.exports.help = {
  name: "lmgtfy"
}
