const Discord = require('discord.js')
const fs = require('fs')
//const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');

  
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
	if(!args[0]) {
		return message.reply('Lütfen ayarlamak istediğiniz sayıyı yazınız')
	}

	//let profil = JSON.parse(fs.readFileSync("./jsonlar/sayac.json", "utf8"));

	if(isNaN(args[0])) {
		return message.reply('Sadece sayı!')
	}

	if(args[0] <= message.guild.members.size) {
		const embed = new Discord.RichEmbed()
		return message.reply("Lütfen sunucu sayısından daha yüksek bir değer girin!")
	}

    if(args[0] === 'kapat') {
   if (db.has(`sayac_${message.guild.id}`) === true) {
     message.channel.send(`Sayaç başarıyla kaldırıldı`)
     db.delete(`sayac_${message.guild.id}`)
     
       if (db.has(`sayac_${message.guild.id}`) === true) {
       db.delete(`sKanal_${message.guild.id}`)
       }
     return
}
  message.channel.send(`Sayaç ayarlanmamış.`)
    return
  
  }
//Mod Log kanalını kapatmak isterseniz **${prefix}modlog-kanal kapat** yazmanız yeterlidir.
  db.set(`sayac_${message.guild.id}`, args[0])
  
	const embed = new Discord.RichEmbed()
	.setTitle(`${client.emojis.get(client.emojiler.evet)} Sayaç başarıyla ayarlandı: **${args[0]}**`)
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayacayarla', 'sayac', 'sayaç'],
	permLevel: 4,
    kategori: "ayarlar",
  
}

exports.help = {
	name: 'sayaç-ayarla',
	description: 'Sayacı ayarlar.',
	usage: 'saya-çayarla <sayı>',
}