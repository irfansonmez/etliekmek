const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  

  
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
    
  if (!args[0]) return message.reply(`Lütfen yasaklamak istediğiniz kelimeyi giriniz`)
  
    
  if (client.commands.get(args[0])) return message.reply(`Botun komudunu yasaklayamazsın.`)
  if (client.aliases.get(args[0])) return message.reply(`Botun komudunu yasaklayamazsın.`)
  
  //db.set(`komutkomuts_${message.guild.id}`, db.has(`komutkomuts_${message.guild.id}`) ? db.fetch(`komutkomuts_${message.guild.id}`) + 1 : 1)
  /*var i = db.set(`komutkomut_${message.guild.id}_${s}`, args[0])
  var a = db.set(`cevapcevap_${message.guild.id}_${s}`, args.slice(1).join(' '))*/
  
 let kelimeler = JSON.parse('{"'+args[0]+'":"'+args.slice(1).join(' ')+'"}')
  
  var a = db.push(`filtre_${message.guild.id}`, kelimeler)
  //var a = db.push(`aciklama_${message.guild.id}`, args.slice(1).join(' '))

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
  
   .setDescription(`Filtre eklendi.`) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtreekle', 'filtre-oluştur'], 
  permLevel: 4,
  kategori: "özel",
 
}; 

exports.help = { 
  name: 'filtre-ekle', 
  description: 'Sunucuda bir kelimyei yasaklarsınız.', 
  usage: 'filtre-ekle <kelime>',
  
};