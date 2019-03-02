const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
let filtre = await db.fetch(`filtre_${message.guild.id}`)

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