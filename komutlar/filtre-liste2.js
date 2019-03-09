const Discord = require('discord.js');

const fs = require("fs");

exports.run = function(client, message, args) {

  let prefix = client.ayar.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix
 
	var str = ''
	   let filteler = client.filtres
        if(!filteler[message.guild.id]) {
            str = "Sunucu içi özel komut bulunmuyor."
        } else {
            for (var i = 0; i < filteler[message.guild.id].length; i++) {
                str += Object.keys(filteler[message.guild.id][i])+"\n"
            }
        }
	 if(!args[0]) {
	 const komut = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
	.setAuthor("Sunucu İçi Özel Komut Listesi")
	.setDescription(str)
    return  message.channel.send(komut)
	 }
};
exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtreliste2'], 
  permLevel: 4,
  kategori: "özel",
 
}; 

exports.help = { 
  name: 'filtre-liste2', 
  description: 'Sunucunuzdaki filtreleri listeler', 
  usage: 'filtre-liste',
  
};