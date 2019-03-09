const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
const s = await db.fetch(`filtre_${message.guild.id}`);
const prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
const argss = args[0]
  
  
if(s === null) return message.channel.send('Sunucunuzda hiç eklenmiş filtre bulunmuyor.')
  
  if(!args[0]) return message.channel.send(`Silmek istediğiniz filtreyi girmeniz gerek örnek: **${prefix}filtre-sil <silmek istediğiniz filtre>**`)
  
 


  
  

          
    
let x = args[0] 
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
  return
    
  

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
  description: 'Sunucudan istediğiniz bir filtreyi silersiniz.', 
  usage: 'filtre-sil',
  
};