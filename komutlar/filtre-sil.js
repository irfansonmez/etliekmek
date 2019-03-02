const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
const s = await db.fetch(`filtre_${message.guild.id}`)


if(s === null) return message.channel.send('Eklenmiş filtre bulunmuyor.')
  
  
  /*
 let kelimeler = args[0]
  
  var a = db.delete(`filtre_${message.guild.id}`)
  
 */
  
  
  let x = args[0] //silinecek şey yani
let arr = []
db.fetch(`filtre_${message.guild.id}`).forEach(v => {
if (v !== x) {
arr.push(v)
}
})
db.set(`filtre_${message.guild.id}`, arr)

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
   .setDescription(`Sunucudaki ${args[0]} filtresi silindi`) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtresil'], 
  permLevel: 4,
  kategori: "özel",
 
}; 

exports.help = { 
  name: 'filtre-sil', 
  description: 'Sunucudaki filtreleri silersiniz.', 
  usage: 'filtre-sil',
  
};