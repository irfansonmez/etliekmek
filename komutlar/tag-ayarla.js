const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
  var s = 'tr'
  var a = client.commands.get('tag-ayarla').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('tag-ayarla').help.enname
    }
    const dil = client[s]
    const o = a
  

  let gM = args.slice(0).join(' ');
  
    if (!gM) {
        return message.reply('Lütfen ayarlamak istediğiniz tagı girin.')
    }


  
    var s = db.set(`tagB_${message.guild.id}`, gM)
  
    const embed = new Discord.RichEmbed()
    
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Otomatik tag ayarlandı: ${gM}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oto-tag', 'ototag'],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: 'tag-ayarla',
   
    description: 'Sunucuya katılan üyeye otomatik tag verir',
    usage: 'tag-ayarla <tag>',
    
    
    
  };