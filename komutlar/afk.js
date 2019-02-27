const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
      
      let sebep = args.slice(0).join(" ");
      

      let dil = await db.fetch(`lang_${message.guild.id}`)  
     
  
  if (dil === "tr") {
    
    if (!sebep) {
   message.channel.send('Lütfen afk olma sebebinizi giriniz.')
    return
    }
    message.channel.send(`artık **${sebep}** sebebi ile AFK modundasın!`)
    
    db.set(`afks_${message.author.id}`, sebep)
    return
  }
  
  if (dil === "en") {
     if (!sebep){
   message.channel.send('Please enter your reason for being afk.')
       return
     }
    
    message.channel.send(`You are in AFK mode now! Reason: **${sebep}**`)
    db.set(`afks_${message.author.id}`, sebep)
    return
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı",
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>',
};
