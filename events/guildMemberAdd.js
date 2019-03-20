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
  
  
  
  
  if (member.bot) return;
  
  
    let tag = await db.fetch(`tagB_${member.guild.id}`)
  if (db.has(`tagB_${member.guild.id}`) === true) {
member.setNickname(`${tag} ${member.user.username}`)
  
  
    
  
  if(db.has(`tagKanal_${member.guild.id}`) === true) {
    
      member.guild.channels.get(db.fetch(`tagKanal_${member.guild.id}`)).send(`**${member.user.tag}** adlı kullanıcıya \`${db.fetch(`tagB_${member.guild.id}`)}\` olarak ayarlanmış olan tag verilerek kullanıcının ismi sunucu için \`${member.nickname || `${db.fetch(`tagB_${member.guild.id}`)} ${member.user.username}`}\` olarak ayarlanmıştır!`)
  }};

  
};
