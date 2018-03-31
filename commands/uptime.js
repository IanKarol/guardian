const Discord = require("discord.js");
const Promise = require('bluebird');
const _ = require('lodash');

module.exports.run = async (client, message, args) => {

  let mesejdz = 'Uptime: ';
  const totalSeconds = process.uptime();
  const days = Math.floor((totalSeconds % 31536000) / 86400);
  const hours = _.parseInt(totalSeconds / 3600) % 24;
  const minutes = _.parseInt(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  mesejdz += days >= 1 ? `${days}d ` : '';
  mesejdz += hours < 10 ? `0${hours}:` : `${hours}:`;
  mesejdz += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  mesejdz += seconds < 10 ? `0${seconds}` : `${seconds}`;
  message.channel.send(mesejdz);

}

module.exports.help = {
  name: "uptime"
}
