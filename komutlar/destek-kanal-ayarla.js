const Discord = require('discord.js')
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
 
  let kanal = message.mentions.channels.first();
  
    if (!kanal) {
      let e = new Discord.RichEmbed()
      .setDescription('Lütfen bir kanal etiketleyiniz')
      .setColor("RANDOM")
      message.channel.send(e)
      return;
    }
  
    var s = db.set(`destekK_${message.guild.id}`, kanal.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Davet kanalı ayarlandı: ${kanal}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["destek-kanal"],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: 'destek-kanal-ayarla',
    description: 'Gelişmiş Destek Sistemindeki destek kanalını değiştirmenizi sağlar.',
    usage: 'destek-kanal-ayarla <#kanal>',

  };