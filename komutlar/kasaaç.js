const Discord = require('discord.js'),
      db = require('quick.db'),
      eşyalar = require('./eşyalar.js');

exports.run = async(message, args, client) => {
var sans = ["Bok", "Stattrak AWP | Asiimov", "Karambit | Doopler :dagger:", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bicak | Fade :dagger:", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi :dagger:", "Hatıra Faction Bicaği :dagger:"];
    var sonuc = eşyalar.item.itemler[Math.floor((Math.random() * eşyalar.item.itemler.length))];
    const kasaE = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Başarıyla Kasa Açıldı')
    .setDescription(`Sana** ${sonuc} **çıktı **${message.author.username}, **Güle Güle Kullan`)
    .setThumbnail('https://www.fenons.pw/bot/kasa.png')
    message.channel.send(kasaE)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kasaaç"],
  permLevel: 1,
    kategori: "oyun",

};

exports.help = {
  name: 'kasa-aç',
  description: 'Bir adet csgo kasası açarsınız.',
  usage: 'kasa-aç',
 
};