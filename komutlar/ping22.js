const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')



exports.run = async (client, message, args) => {
    
 const lang = await db.fetch(`lang_${message.guild.id}`);

    if (lang == 'tr') {
      message.channel.send(`İşte pingim: **${client.ping}**`)

 }
   else if (lang == 'en' || !lang) {
    message.channel.send(`Here's the ping: **${client.ping}**`)
          
 }
   
}
   

/*





*/

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping2',
  description: '',
  usage: ''
};