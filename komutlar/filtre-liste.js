const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
let filtre = await db.fetch(`filtre_${message.guild.id}`)
// let filtreler = await db.fetch(`filtreK_${message.guild.id}_${args[0]}`)


//if(filtreler === null) return message.channel.send('Sununuza eklenmiş filtre bulunmuyor')

if(filtre.length <= 0) return message.channel.send('Bu sunucuda filtre bulunmuyor.')
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL)
    .setTitle(`${message.guild.name} | Kelime filtreleri`)//çakma coder seni, NERDEN ÇALIYON LAN İBNE AKSJDLGJAKSGKJSAJKSG
   .setDescription(filtre) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtreliste'], 
  permLevel: 4,
  kategori: "moderasyon",
 
}; 

exports.help = { 
  name: 'filtre-liste', 
  description: 'Sunucunuzdaki filtreleri listeler', 
  usage: 'filtre-liste',
  
};