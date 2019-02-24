const Discord = require('discord.js')
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
 
  
    let rol = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.slice(0).join(' '));
  
    if (!rol) {
      let e = new Discord.RichEmbed()
      .setDescription('Lütfen bir rol adı yazınız veya etiketleyiniz')
      .setColor("RANDOM")
      message.channel.send(e)
      return;
    }
  
    var s = db.set(`destekR_${message.guild.id}`, rol.id)
  
    const embed = new Discord.RichEmbed()

    .setDescription(`${client.emojis.get(client.emojiler.evet)} Destek rolü başarıyla ayarlandı: ${rol}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["destek-rol"],
    permLevel: 4,
    kategori: "ayarlar",
 
  };

  exports.help = {
    name: 'destek-rol-ayarla',
    description: 'Gelişmiş Destek Sistemindeki destek ekibi rolünü değiştirmenizi sağlar.',
    usage: 'destek-rol-ayarla <@rol>',
   
  };