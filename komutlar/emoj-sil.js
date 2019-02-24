const Discord = require('discord.js');

exports.run = function(client, message, args) {
  
 // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);
  let guild = message.guild
  //let link = args[0]
  let ad = args[0]
  //if (!link) return message.channel.send(`Bir emoji linki belirtmelisin.`)
  if (!ad) return message.channel.send(`Bir emoji ismi yazmalısın.`)
  
  guild.removeEmoji(ad)
    .then(emoji => message.channel.send(`${emoji.name} adında emoji silindi. (${emoji})`))
    .catch(console.error);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-temizle','emojisil','emoji-sil'],
  permLevel: 5,
  kategori: "yetkili"
};

exports.help = {
  name: 'emojisil',
  description: 'Belirttiğiniz link ve isimde emoji siler.',
  usage: 'emojisil <isim>'
};