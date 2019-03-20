const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')

module.exports = async member => {
  
  
   let client = member.client;
  const ayarlar = client.ayarlar
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  
  
  
let prefix;
  
if (db.has(`prefix_${member.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${member.guild.id}`)
}
  
if (db.has(`prefix_${member.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  var args = member.content.split(' ').slice(1)
  
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
    

  
};
