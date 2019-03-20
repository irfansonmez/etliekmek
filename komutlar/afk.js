const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(message, args, client) => {

if(!args[0]) return message.channel.send('Lütfen afk olma sebebinizi yazınız.')
  
  message.channel.send(`\`\`\${args[0]}\`\`\ Sebebi ile afk oldunuz!`)
  db.set(`afkS_$

}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['afkol', 'afk-ol'],
kategori: "kullanıcı"

}

exports.help = {
name: "afk",
description: "Sunucuda veya başka bir sunucuda afk olmanızı sağlar ve birisi sizi etiketleyince afk olduğunuzu sebebi ile belirtir.",
usage: "afk <sebep>"

}