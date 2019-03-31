const Discord = require('discord.js'),
      db = require('quick.db');

const değerli = [
'P250 | Kanat Atışı 4.23',
'XM1014 | Teclu Lambası 4.67',
'Negev | Güç Yükleyici 5.24',
'R8 Revolver | Solgun Sarı 4.69',
'M4A1-S | Geri Dönüş 6.23',
'Sawed-Off | Dikkat Çeker 4.20',
'MP7 | Impire 4.25',
'MAC-10 | Nükleer Bahçe 5.20',
'XM1014 | Orman 4.50',
'UMP-45 | Kemik Yığını 5.03'],
      
değersiz = [
   'CZ75-Otomatik | Eko 1.54',
'SCAR-20 | Güç Çekirdeği 1.79',
'UMP-45 | Yanılgı 1.90',
'Five-SeveN | Orman 2.45',
'Nova | Oyuncak Asker 1',
'M249 | Zümrüt Zehirli Dart 1.23',
'SCAR-20 | Salgın 1.21',
'G3SG1 | Turuncu Kimono 1.22',
'M249 | Darbeli Matkap 1.67',
'FAMAS | Sinir Ağı 1.55'], 

      
orta = [
  
'P250 | Sonra Görüşürüz 25',
'Çift Beretta | Cezalandırıcı  15',
'Glock-18 | Yeraltı Suyu 32',
'Galil AR | Kış Ormanı 29',
'P2000 | Çayır Yaprakları 32',
'SSG 08 | Yosun Tireli 19',
'M4A4 | Çöl Fırtınası 18',
'SCAR-20 | Palmiye 24',
'AK-47 | Yırtıcı 25',
'AWP | Yılan Kamuflaj 19.99'],
  
      
çokDeğerli = [
'AWP | Dragon Lore (Factory New) 1500',
'Stat Trak™ M4A4 | Howl 3200',
'M9 Bayonet | Lore (Factory New) 1302',
'Moto Gloves | Spearmint (Minimal Wear) 5000',
'M9 Bayonet | Night (Factory New) 6700',
'StatTrak™ AK-47 | Fire Serpent (Minimal Wear) 905',
'Karambit | Autotronic (Factory New) 2405',
'AWP | Medusa (Factory New) 1204',
'Sport Gloves | Vice (Minimal Wear) 5402',
'MP9 Bulldozer 1204'],
           
çokDeğersiz = [
  
'P90 | Çekiş 70',
'SG 553 | Aloha 25 ',
'MAC-10 | Okyanus 50',
'Glock-18 | Dünya Dışı 10',
'P250 | Dalgalanma 56',
'SCAR-20 | Plan 80',
'MAC-10 | Lapis Kertenkele 20',
'MAG-7 | Kobalt Çekirdeği 40',
'UMP-45 | Çivit 42',
'Five-SeveN | Ormanda Gece 59'];
  
  


exports.run = async (client, message, args) => {
  
 var Kşans = Math.floor(Math.random() * 400);
  var şans = Math.floor(Math.random() * 101) + Kşans;
  
  var şanss = `${şans > 100 ? '100' : şans}` 
 // var şans = 5
  
  if(şans <= 5) {
  
    
    var çokDeğerliS = çokDeğerli[Math.floor((Math.random() * çokDeğerli.length))];
    
    message.channel.send(`**%${şanss}** Şans ile **${çokDeğerliS}** kazandınız bu eşyanın değeri çok yüksek! :scream:`)
  return
  }
  
    if(şans <= 15) {
  
      
      var değerliS = değerli[Math.floor((Math.random() * değerli.length))];
         
      message.channel.send(`**%${şanss}** Şans ile **${değerliS}** kazandınız bu eşyanın değeri yüksek! :scream:`)

  return
  
  }
  
    if(şans <= 35) {
  // ORTA
      var ortaS = orta[Math.floor((Math.random() * orta.length))];
      
   message.channel.send(`**%${şanss}** Şans ile **${ortaS} Tl** Fiyatlı bir eşya kazandınız bu eşyanın değeri orta!`)
      
      
      
  return
  }
  
  
   if(şans <= 50) {
  // DEĞERSİZ
    var değersizS = değersiz[Math.floor((Math.random() * değersiz.length))];
        message.channel.send(`**%${şanss}** Şans ile **${değersizS} Tl** Fiyatlı bir eşya kazandınız bu eşyanın değeri az!`)

     
  return
  }
  
   if(şans <= 100) {
  // ÇOK DEĞERSİZ
     var çokdeğersizS = çokDeğersiz[Math.floor((Math.random() * çokDeğersiz.length))];
        message.channel.send(`**%${şanss}** Şans ile **${çokdeğersizS} Kuruş** Fiyatlı bir eşya kazandınız bu eşyanın değeri yok bile!`)

     
     
     
  return
  }
  
   if(şans > 100) {
  // ÇOK DEĞERSİZ
   var çokdeğersizS = çokDeğersiz[Math.floor((Math.random() * çokDeğersiz.length))];
        message.channel.send(`**%${şanss}** Şans ile **${çokdeğersizS} Kuruş** Fiyatlı bir eşya kazandınız bu eşyanın değeri yok bile!`)

     
     
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