const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  if (!args[0]) return message.channel.send('Bir dil seçmelisin? Örneğin: `dil tr`')
  
  if (args[0] == 'tr') {
    db.set(`lang_${message.guild.id}`, 'tr')
      message.channel.send('Bu sunucuda dil sistemi **TR** olarak ayarlandı!')
    
  }
  if (args[0] == 'en') {
    db.set(`lang_${message.guild.id}`, 'en')
      message.channel.send('The language of the bot is set to **EN** on this server!')
   
  }
   if (args[0] == 'sıfırla') {
    db.set(`lang_${message.guild.id}`, 'tr')
      message.channel.send('Bu sunucuda dil sistemi sıfırlandı!')
  
  }
 
    }
   

   



                                                  
                                                  
  
     
    


exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['language2'],
  permLevel: 4,
  kategori: "moderasyon"
};

exports.help = {
  name: 'dil-ayarla2',
  description: '',
  usage: ''
};