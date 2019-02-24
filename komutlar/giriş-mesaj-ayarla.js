const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  

    let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let gM = args.slice(0).join(' ');
  
    if (!gM) {
        return message.reply(`Doğru kullanım: ${prefix}giriş-mesaj-ayarla <mesaj> \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}** yazınız aksi taktirde kişiyi göstermez.`)
    }

    /*if(!gMesaj[message.guild.id]){
        gMesaj[message.guild.id] = {
            gm: gM
        };
    }
    fs.writeFile("././jsonlar/girisM.json", JSON.stringify(gMesaj), (x) => {
        if (x) console.error(x)
      })*/
  
    var s = db.set(`girisM_${message.guild.id}`, gM)
  
    const embed = new Discord.RichEmbed()
    
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Giriş mesajı başarıyla ayarlandı ${gM}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: 'giriş-mesaj-ayarla',
    description: 'Giriş mesajını değiştirmenizi sağlar.',
    usage: 'giriş-mesaj-ayarla <mesaj> \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}** yazınız aksi taktirde kişiyi göstermez.',
    
  };