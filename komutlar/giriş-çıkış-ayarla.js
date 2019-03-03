const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply(`Lütfen ayarlamak istediğiniz kanalı etiketleyiniz. Örnek: **${prefix}giriş çıkış ayarla #kanal**`)
    }

    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/gc.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
    var s = db.set(`gc_${message.guild.id}`, "<#"+channel.id+">")
  
    const embed = new Discord.RichEmbed()
    
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Giriş çıkıl kanalı ayarlandı: ${channel}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoş-geldin-ayarla', 'giriş-çıkış-belirle', 'girişçıkışayarla'],
    permLevel: 4,
    kategori: "ayarlar",
  
}

exports.help = {
    name: 'giriş-çıkış-ayarla',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'giriş-çıkış-ayarla <#kanal>',

}