const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const ascii = require('figlet');

exports.run = function(client, message, args) {

  const db = require('quick.db');

  
  var yazi = args.slice(0).join(' ');
  if (yazi.length < 1) {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Lütfen bir yazılacak yazıyı giriniz giriniz.`)
    message.channel.send(embed)
    return
  }
  if (yazi.length > 8) return message.reply('Yazılacak mesaj **8** karakterden uzun olmamalı')
  
   ascii(yazi, {
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      },
      function(err, data) {
        if (err) {
          message.reply(`HATA: ${err}`)
          console.error(err)
        }
     
        message.channel.send(data, {
          code: 'text'
        })
      })

  


  
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
  kategori: "eğlence",
};

exports.help = {
  name: 'ascii',
  description: 'Yazdığınız yazıyı ascii şekline çevirir.',
  usage: 'ascii <yazı>',
};