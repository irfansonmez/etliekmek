const Discord = require('discord.js'),
      db = require('quick.db');

const değerli = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
''],
değersiz = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
''],
      
orta = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
''],
      
çokDeğerli = [
'AWP | Dragon Lore (Factory New)',
'Stat Trak™ M4A4 | Howl',
'M9 Bayonet | Lore (Factory New)',
'Moto Gloves | Spearmint (Minimal Wear)',
'M9 Bayonet | Night (Factory New)',
'StatTrak™ AK-47 | Fire Serpent (Minimal Wear)',
'',
'',
'',
''],
      
           
çokDeğersiz = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
''];

exports.run = async (client, message, args) => {

  var şans = Math.floor(Math.random() * 101);
  
  
  if(şans <= 5) {
  message.channel.send(`çok değerli ${şans}`)
    
    var çokDeğerliS = çokDeğerli[Math.floor((Math.random() * çokDeğerli.length))];
    
  return
  }
  
    if(şans <= 15) {
  message.channel.send(`değerli ${şans}`)
      
      var değerliS = değerli[Math.floor((Math.random() * değerli.length))];
      
  return
  
  }
  
    if(şans <= 35) {
  // ORTA
    message.channel.send(`orta ${şans}`)
      
      var ortaS = orta[Math.floor((Math.random() * orta.length))];
      
  return
  }
  
  
   if(şans <= 50) {
  // DEĞERSİZ
    message.channel.send(`değersiz ${şans}`)
     
   var değersizS = değersiz[Math.floor((Math.random() * değersiz.length))];
     
  return
  }
  
   if(şans <= 100) {
  // ÇOK DEĞERSİZ
    message.channel.send(`çok değersiz ${şans}`)
     
     var çokdeğersizS = çokDeğersiz[Math.floor((Math.random() * çokDeğersiz.length))];
     
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