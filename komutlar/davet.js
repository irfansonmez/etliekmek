const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');
  

  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} - LİNKLERİ`, client.user.avatarURL)
.setDescription(`[Bot davet linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958847)\n[Web Panel](https://${client.ayarlar.webpanel})\n[Destek sunucusu](https://discord.gg/vnWgkX3)  \n[DBL sayfası](https://discordbots.org/bot/${client.user.id}) \n[DBL Oy sayfası](https://discordbots.org/bot/${client.user.id}/vote)
`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['linkler', 'destek', 'destek-sunucu', 'web', 'site', 'webpanel', 'web-panel', 'dashboard'],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};