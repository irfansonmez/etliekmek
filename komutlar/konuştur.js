const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('quick.db');
  
 
  
  if (!message.guild.members.get(client.user.id).hasPermission("MANAGE_ROLES")) return message.reply('Gerekli iznin yok!')
  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  if (db.has(`mLog_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış');
  let modlog = message.guild.channels.get(db.fetch(`mLog_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (db.has(`sRol_${message.guild.id}`) === false) return message.reply('Sustur rolü ayarlanmamış');
  let muteRole = message.guild.roles.get(db.fetch(`sRol_${message.guild.id}`));
  if (message.mentions.users.size < 1) return message.reply('Lütfen bir üyeyi etiketleyin');
  if (user.id === message.author.id) return message.reply('hayır sen olamazsın!');
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  if (!message.guild.member(user).roles.has(muteRole.id)) return message.reply('Bu kişi susturulmamış!');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('İşlem', 'Konuşturma')
  .addField('Konuşturulan kişi', `${user.tag} (${user.id})`)
  .addField('Konuşturan yetkili', `${message.author.username}#${message.author.discriminator}`)
  modlog.send(embed);
  
  message.guild.members.get(user.id).removeRole(muteRole)
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Başarıyla susturulması kaldırıld`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur-kaldır"],
  permLevel: 1,
    kategori: "moderasyon",

};

exports.help = {
  name: 'konuştur',
  description: 'Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.',
  usage: 'konuştur <@kullanıcı>',
 
};