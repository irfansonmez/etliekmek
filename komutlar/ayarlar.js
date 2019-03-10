            const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  

  
  const a = args[0]
  
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let prefix2 = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  var ac = client.emojis.get(client.emojiler.evet)
  var ka = client.emojis.get(client.emojiler.hayır)
  var p = client.emojis.get("516619492441325578")
  
if (!a && a !== "destek" && a !== "kapat" && a !== "liste" && a !== "support" && a !== "off" && a !== "list") {
 
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`» ${message.guild.name} Sunucu ayarları «`, `https://cdn.discordapp.com/emojis/456224342427041803.png?v=1`)
  .addField('Destek sistemi', `**${prefix}ayarlar destek** Yazarak destek ayarlarını görebilirsiniz`)
  .addField('Sunucu prefixi', `${prefix2}`, true)
  .addField('Giriş çıkış kanalı', db.has(`gc_${message.guild.id}`) ? ac + message.guild.channels.get(db.fetch(`gc_${message.guild.id}`)) : `${ka} Ayarlanmamış **${prefix}giriş-çıkış-ayarla** `, true)
  .addField('Mod log kanalı', db.has(`mLog_${message.guild.id}`) ? `${ac} ${db.fetch(`mLog_${message.guild.id}`)}` : `${ka} Ayarlanmamış **${prefix}mod-log-ayarla** `, true)
  .addField('Log kanalı', db.has(`log_${message.guild.id}`) ? ac + message.guild.channels.get(db.fetch(`log_${message.guild.id}`)) : `${ka} Ayarlanmamış **${prefix}log-ayarla**`, true)
  .addField('Link engeli', db.has(`linkE_${message.guild.id}`) ? `${ac} Açık` : `${ka} Ayarlanmamış **${prefix}link-engelle**`, true)
  .addField('Küfür engeli', db.has(`küfürE_${message.guild.id}`) ? `${ac} Açık` : `${ka} Ayarlanmamış **${prefix}küfür-engelle**` ,true)
  .addField('Büyük harf engeli', db.has(`capsE_${message.guild.id}`) ? `${ac} Açık` : `${ka} Ayarlanmamış **${prefix}büyükharf-engelle**` ,true)
  .addField('Otorol', db.has(`otoR_${message.guild.id}`) ? `${ac} \`@${message.guild.roles.get(db.fetch(`otoR_${message.guild.id}`)).name}\`` : `${ka} Ayarlanmamış **${prefix}oto-rol**`, true)
  .addField('Susturma rolü', db.has(`sRol_${message.guild.id}`) ? `${ac} \`@${message.guild.roles.get(db.fetch(`sRol_${message.guild.id}`)).name}\`` : `${ka} Ayarlanmamış **${prefix}sustur-rol-ayarla**`, true)
  .addField('Sayaç kanalı', db.has(`sKanal_${message.guild.id}`) ? `${ac} ${db.fetch(`sKanal_${message.guild.id}`)}` : `${ka} Ayarlanmamış **${prefix}sayaç-kanal-ayarla** `, true)
  .addField('Sayaç', db.has(`sayac_${message.guild.id}`) ? `${ac} ${db.fetch(`sayac_${message.guild.id}`)}` : `${ka} Ayarlanmamış **${prefix}sayaç-ayarla**`, true)
  .addField('Davet kanalı', db.has(`dKanal_${message.guild.id}`) ? ac + message.guild.channels.get(db.fetch(`dKanal_${message.guild.id}`)) : `${ka} Ayarlanmamış **${prefix}davet-kanal-ayarla**`, true)
 
  .addField('Otomatig tag', db.has(`tagB_${message.guild.id}`) ? db.fetch(`tagB_${message.guild.id}`) : `${ka} Ayarlanmamış **${prefix}tag-ayarla**`)

  .addField('Giriş mesajı', db.has(`girisM_${message.guild.id}`) ? db.fetch(`girisM_${message.guild.id}`).replace("{kullanıcı}", "**{kullanıcı}**").replace("{user}", "**{user}**") : `${ka} Ayarlanmamış **${prefix}giriş-mesaj-ayarla**`)
  .addField('Çıkış mesajı', db.has(`cikisM_${message.guild.id}`) ? db.fetch(`cikisM_${message.guild.id}`).replace("{kullanıcı}", "**{kullanıcı}**").replace("{user}", "**{user}**") : `${ka} Ayarlanmamış **${prefix}çıkış-mesaj-ayarla**`)
  message.channel.send(embed)
  return;
}
  
  if (a === "destek" || a === "support") {
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`» ${message.guild.name} Destek ayarları «`, `https://cdn.discordapp.com/emojis/456224342427041803.png?v=1`)
  .addField('Destek kanalı', db.has(`destekK_${message.guild.id}`) ? ac + ` ${message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))}` : `${ka} Ayarlanmamış **${prefix}destek-kanal-ayarla**`, true)
  .addField('Destek rolü', db.has(`destekR_${message.guild.id}`) ? ac + " `@"+message.guild.roles.get(db.fetch(`destekR_${message.guild.id}`)).name+"`" : `${ka} Ayarlanmamış **${prefix}destek-rol-ayarla**`, true)
  message.channel.send(embed)
  return;
 }
  
if (a === "liste" || a === "list") {
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor('Liste')
  .addField('Giriş çıkış', "`giriş-çıkış`")
  .addField('Modlog', "`mod-log`")
  .addField('Log', "`log`")
  .addField('Link engeli', "`link-engel`")
  .addField('Küfür engeli', "`küfür-engel`")
  .addField('Otorol', "`oto-rol`")
  .addField('Susturma rolü', "`sustur-rol`")
  .addField('Sayaç kanalı', "`sayaç-kanal`")
  .addField('Sayaç', "`sayaç`")
  .addField('otomatik tag', "`tag`")
  .addField('Giriş mesajı', "`giriş-mesaj`")
  .addField('Çıkış mesajı', "`çıkış-mesaj`")
  .addField('Destek kanalı', "`destek-kanal`")
  .addField('Destek rolü', "`destek-rol`")
  message.channel.send(embed)
}
  
if (a === "kapat" || a === "off") {
  
  var x = args[1];
  
  if (!x) {
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Sıfırlanmasını istediğiniz ayarı yazınız! \nBir ayarı sıfırlamak için o ayarın anahtar kelimesini yazmalısınız. \nAnahtar kelimeler için `r!ayarlar liste` yazabilirsiniz.")
    .setFooter(`NOT: **${prefix}ayarlar** kapat hepsi yazar iseniz bütün ayarları sıfırlar.`)
    message.channel.send(e)
  }
  
  if (x === "giriş-çıkış") {
    db.delete(`gc_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
    if (x === "tag") {
    db.delete(`tagB_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "mod-log") {
    db.delete(`mLog_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "log") {
    db.delete(`log_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "link-engel") {
    db.delete(`linkE_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "küfür-engel") {
    db.delete(`küfürE_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "oto-rol") {
    db.delete(`otoR_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "sustur-rol") {
    db.delete(`sRol_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "sayaç-kanal") {
    db.delete(`sKanal_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "sayaç") {
    db.delete(`sayac_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "giriş-mesaj") {
    db.delete(`girisM_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "çıkış-mesaj") {
    db.delete(`cikisM_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "destek-kanal") {
    db.delete(`destekK_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "destek-rol") {
    db.delete(`destekR_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
  }
  
  if (x === "hepsi" || x === "all") {
    
    db.delete(`gc_${message.guild.id}`)
    
    db.delete(`mLog_${message.guild.id}`)

    db.delete(`log_${message.guild.id}`)
    
    db.delete(`linkE_${message.guild.id}`)

    db.delete(`küfürE_${message.guild.id}`)

    db.delete(`otoR_${message.guild.id}`)
    
    db.delete(`sRol_${message.guild.id}`)
  
    db.delete(`sKanal_${message.guild.id}`)
  
    db.delete(`sayac_${message.guild.id}`)
  
    db.delete(`girisM_${message.guild.id}`)
  
    db.delete(`cikisM_${message.guild.id}`)
    
    db.delete(`destekK_${message.guild.id}`)

    db.delete(`destekR_${message.guild.id}`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Başarıyla silindi.')
    message.channel.send(embed)
    
  }
  
}
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["settings"],
    permLevel: 4,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar',
  };
