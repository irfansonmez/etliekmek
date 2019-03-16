const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let p = await db.fetch(`prefix_${message.guild.id}`)
let prefix;
if (p == null) prefix = client.ayarlar.prefix
  else prefix = p
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(client.emojis.get(client.emojiler.hayır) + ' Bu komut için yeterli iznin **yok!**')
  
  let command = args[0]
  if (!command) return message.channel.send(client.emojis.get(client.emojiler.hayır) + ' Lütfen bir **komut adı** girin! Şarkı komutlarını iptal etmek için; `+komut-yasakla şarkı`')
  
  if (!client.commands.has(command)) return message.channel.send(client.emojis.get(client.emojiler.hayır) + ' Böyle bir **komut** bulunamadı!')
  if (client.commands.has(command)){
    command = client.commands.get(command);
    
    if (db.has(`yasak_${message.guild.id}_${command.help.name}`)){
      await db.delete(`yasak_${message.guild.id}_${command.help.name}`)
      message.channel.send(process.env.basarili + ' Komut **artık kullanılabilir!**')
    }else{
    
    await db.push(`yasak_${message.guild.id}_${command.help.name}`, command.help.name)
    message.channel.send(`${process.env.basarili} Komut başarıyla **sunucuda yasaklandı!** Tekrar aktif etmek için; \`${prefix}komut-yasakla ${args[0]}\``)
    await db.push(`yasak_${message.guild.id}_${command.conf.aliases[0] ? command.conf.aliases.join(', ') : 'Bulunmuyor'}`, command.conf.aliases[0])
    }
  }
};
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 4
};
 
exports.help = {
        name: 'komut-yasakla',
        description: '',
        usage: ''
};