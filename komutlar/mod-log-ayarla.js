const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/mLog.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
 
  
  let channel = message.mentions.channels.first()
  
  
    let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    if(args[0] === 'kapat') {
   if (db.has(`mLog_${message.guild.id}`) === true) {
     message.channel.send(`Mod log kanalı başarıyla kaldırıldı`)
     db.delete(`mLog_${message.guild.id}`)
     return
}
  message.channel.send(`Mod log kanalı ayarlanmamış.`)
    return
  
  }

  
    if (!channel) {
        return message.reply('Lütfen bir kanal etiketleyiniz')
    }

    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            modlog: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/mLog.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
  db.set(`mLog_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Mod log kanalı ayarlandı: ${channel}\nMod Log kanalını kapatmak isterseniz **${prefix}modlog-kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log-belirle', 'modlog-kanal'],
    permLevel: 4,
    kategori: "moderasyon",
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'Moderasyon kayıtları kanalını ayarlar.',
    usage: 'mod-log-ayarla <#kanal>',
}