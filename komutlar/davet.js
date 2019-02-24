const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');
  

  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - LİNKLERİ`, client.user.avatarURL)
.setDescription(`[Bot davet linki](https://discordapp.com/oauth2/authorize?client_id=538372202215768065&scope=bot&permissions=2146958847) \n[Destek sunucusu](https://discord.gg/vnWgkX3)  \n[DBL sayfası](https://discordbots.org/bot/538372202215768065) \n[DBL Oy sayfası](https://discordbots.org/bot/538372202215768065)
`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['linkler'],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};