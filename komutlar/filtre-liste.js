const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
const s = await db.fetch(`filtre_${message.guild.id}`)


if(s === null) return message.channel.send('Eklenmiş filtre bulunmuyor.')
  
  
  /*
 let kelimeler = args[0]
  
  var a = db.delete(`filtre_${message.guild.id}`)
  
 */
  
  


let filtre = await db.fetch(`filtre_${message.guild.id}`)

if(filtre === null) return message.channel.send('Sunucunuzda hiç eklenmiş filtre bulunmuyor.')

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
   .setDescription(filtre) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtreliste'], 
  permLevel: 4,
  kategori: "özel",
 
}; 

exports.help = { 
  name: 'filtre-liste', 
  description: 'Sunucunuzdaki filtreleri listeler', 
  usage: 'filtre-liste',
  
};