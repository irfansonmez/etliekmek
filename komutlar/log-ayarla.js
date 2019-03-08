const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/log.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
 
  let channel = message.mentions.channels.first()
  
    

    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            log: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/log.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
  
  
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
      if(args[0] === 'kapat') {
   if (db.has(`log_${message.guild.id}`) === true) {
     message.channel.send(`Log kanalı başarıyla kaldırıldı`)
     db.delete(`log_${message.guild.id}`)
     return
}
  message.channel.send(`Log kanalı ayarlanmamış.`)
    return
  
  }
  
  if (!channel) {
        return message.reply('Lütfen bir kanal etiketleyiniz')
    }
  
  
    db.set(`log_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Log kanalı başarıyla ayarlandı: ${channel}\nLog kanalını kapatmak isterseniz **${prefix}log-kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['log-belirle', 'log-kanal'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: 'log-ayarla',
    description: 'Sunucu kayıtları kanalını ayarlar.',
    usage: 'log-ayarla <#kanal>',
 
}