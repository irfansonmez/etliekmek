const Discord = require('discord.js'),
      db = require('quick.db');

const değerli = [],
değersiz = [],
orta = [],
çokDeğerli = [],
çokDeğersiz = [];



exports.run = async (client, message, args) => {

  var şans = Math.floor(Math.random() * 101);
  
  
  if(şans <= 5) {
  message.channel.send(`çok değerli ${şans}`)
  return
  }
  
    if(şans <= 15) {
  message.channel.send(`değerli ${şans}`)
  return
  
  }
  
    if(şans <= 35) {
  // ORTA
    message.channel.send(`orta ${şans}`)
  return
  }
  
  
   if(şans <= 50) {
  // DEĞERSİZ
    message.channel.send(`değersiz ${şans}`)
  return
  }
  
   if(şans <= 100) {
  // ÇOK DEĞERSİZ
    message.channel.send(`çok değersiz ${şans}`)
  return
  }
  //  var sonuc = sans[Math.floor((Math.random() * sans.length))];

}

exports.conf = {
enabled: false,
guildOnly: false,
kategori: 'oyun',
aliases: [],
permLevel: 0,
}

exports.help = {
    name: 'kasaaç',
    description: 'Bir adet csgo kasası açarsınız',
    usage: 'kasaaç',
}