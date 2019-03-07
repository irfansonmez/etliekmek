const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args) => { 
  
let arg1 = args[0]
let arg2 = args[1]
    
  if (!arg1) return message.reply("Oluşturulacak özel komutun adını yazınız!")
  if (!arg2) return message.reply("Oluşturulacak özel komutun vereceği yanıtı yazınız!")
    
  if (client.commands.get(arg1)) return message.reply("Botun zaten var olan bir komutunu özel komut olarak ekleyemezsin!")
  if (client.aliases.get(arg1)) return message.reply("Botun zaten var olan bir komutunu özel komut olarak ekleyemezsin!")
  
  let obj = JSON.parse('{"'+arg1+'": "'+arg2+'"}')
  
  db.push(`cmdcmd_${message.guild.id}`, obj)

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
   .setTitle(`${arg1} İsimli Özel Komut Başarıyla Oluşturuldu!`) 
   .setDescription(`\`${arg2}\` olarak cevap verecektir!`) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['komutekle', 'komut-oluştur'], 
  permLevel: 3,
    kategori: "özel",
  category: "special"
}; 

exports.help = { 
  name: 'komut-ekle', 
  description: 'Sunucuya özel komut ekler.', 
  usage: 'komut-ekle <komut adı> <komut açıklaması>'
};