const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
      
  if(!args[0]) return message.channel.send(`Lütfen bir seçim giriniz\n${prefix}truckersmp <kullanıcı> <steam id>\n${prefix}truckersmp <trafik>\n${prefix}truckersmp <oyuncular>`)
  
  if(args[0] === 'kullanıcı'){
    
    var request = require('request');
request(`https://simsekapi.cf/tmpuye/${args[1]}`, function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
      
      let sayfa = [`**${veri.kullaniciadi}** Truckers MP Bilgileri
      
      Katılma Tarihi: **${veri.katilmatarihi}**
      Ban Durumu: **${veri.katilmatarihi === 'evet' ? 'Ban Yememiş' : 'Ban Yemiş'}**
      Adminmi: **${veri.banlimi}**
      Grubu: **${veri.grubu}**
      Profil Resmi: **${veri.profilresmi}**
      `]
      
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(sayfa)
        .setThumbnail(veri.profilresmi)
        message.channel.send(embed)
      
    }
});
    return
  }
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['turckers', 'trucker', 'tmp', 'ets', 'ets2'],
  permLevel: 0,
  kategori: "kullanıcı",
};

exports.help = {
  name: 'truckersmp',
  description: 'Truckersmp trafik, aktif sayısı ve kullanıcı bilgisini verir',
  usage: 'truckersmp',
};
