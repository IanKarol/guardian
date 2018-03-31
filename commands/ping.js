const Discord = require("discord.js");

module.exports.run = (client, message) => {
  message.channel.send('Pong!').then((msg) => {
    msg.edit(`Pong! ${Math.round(client.ping)}ms`);
  });
};

module.exports.help = {
  name: "ping"
}
