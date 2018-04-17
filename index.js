const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./commands/coins.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.lenght <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setPresence({ game: { name: 'Frosty Bridge', url: 'https://twitch.tv/iangtx', type: 1 } });
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.user.tag} joined the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "general");
  welcomechannel.send(`LOOK OUT EVERYONE! ${member} has joined the party!`);
});

bot.on("guildMemberRemove", async member => {

  console.log(`${member.user.tag} left the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "general");
  welcomechannel.send(`RIP ${member}, just left the party!`);

});

bot.on("channelCreate", async channel => {
  console.log(`${channel.name} has been created.`);

  let sChannel = channel.guild.channels.find(`name`, "actionlog");
  sChannel.send(`${channel} has beed created.`);
});

bot.on("channelDelete", async channel => {
  console.log(`${channel.name} has deleted.`);

  let sChannel = channel.guild.channels.find(`name`, "actionlog");
  sChannel.send(`${channel.name} has beed deleted.`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./commands/coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
    });
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#7289DA")
    .addField("💰", `${coinAmt} coins added`);

    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
  }

  let prefix = prefixes[message.guild.id].prefixes;
  //let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(process.env.token);
