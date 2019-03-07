const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args) => { 
  
let arg1 = args[0]
let arg2 = args[1]
let arg3 = args[2]
    

    
  if (client.commands.get(arg1)) return message.reply("Botun zaten var olan bir komutunu özel komut olarak ekleyemezsin!")
  if (client.aliases.get(arg1)) return message.reply("Botun zaten var olan bir komutunu özel komut olarak ekleyemezsin!")
  
for (var i = 0; i < db.fetch(`özelKD_${message.guild.id}`).length; i++) {
if (Object.keys(db.fetch(`özelKD_${message.guild.id}`)[i])[0] === arg1) {
if (db.fetch(`özelKD_${message.guild.id}`)[i].tip === 'embed') {
db.set(`özelKD_${message.guild.id}`, JSON.parse(`{"${Object.keys(db.fetch(`özelKD_${message.guild.id}`)[i])[0]}":"${db.fetch(`özelKD_${message.guild.id}`)[i][Object.keys(db.fetch(`özelKD_${message.guild.id}`)[i])[0]]}", "tip":"${db.fetch(`özelKD_${message.guild.id}`)[i].tip}", "renk":"${db.fetch(`özelKD_${message.guild.id}`)[i].renk}"}`))
}

}
}

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
   .setTitle(`${arg1} İsimli Özel Komut Başarıyla Oluşturuldu!`) 
   .setDescription(`\`${arg2}\` olarak cevap verecektir!`) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['dkomutsil', 'dkomut-sil'], 
  permLevel: 3,
    kategori: "özel",
  category: "special"
}; 

exports.help = { 
  name: 'dkomut-sil', 
  description: 'Sunucuya özel komut ekler.', 
  usage: 'komut-ekle <komut adı> <komut açıklaması>'
};