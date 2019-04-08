const Discord = require('discord.js')
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
 if(!args[0]) return message.channel.send('Lütfen aranacak emojinin adını giriniz.')
 
  const emoji = client.emojis.find(e => e.name == args[0]).id

if(!emoji) return message.channel.send('Böyle bir emoji bulunamadı. Unutmayın emojiler sadece botun **ekli** olduğu sunucularda aramaktadır.')
  
  message.channel.send(`${client.emojis.get(emoji)}`)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emoji-bul", "emojiara","emojibul"],
    permLevel: 0,
    kategori: "kullanıcı",
 
  };

  exports.help = {
    name: 'emoji-ara',
    description: 'Gelişmiş Destek Sistemindeki destek ekibi rolünü değiştirmenizi sağlar.',
    usage: 'destek-rol-ayarla <@rol>',
   
  };