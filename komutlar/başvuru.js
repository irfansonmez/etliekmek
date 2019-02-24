const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {
      

          const afk = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Ztacia yetkili alım formu')
      .setDescription(`[Yetkili alım formuna gitmek için buraya tıklayınız](https://docs.google.com/forms/d/e/1FAIpQLSdUi38mxU2SqyYnTaTgmW7TyUV-7aMyAoBp2_N-1S-5soibnA/viewform)`)
      .setFooter('Ztacia Yetkili Alım', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(afk);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru',
  description: '',
  usage: ''
};