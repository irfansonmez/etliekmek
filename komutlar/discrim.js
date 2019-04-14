const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
  	const discrim = args.discrim || msg.author.discriminator;
        const users = this.client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        if (users < 1) {
            let embed = {
                color: 3447003,
                description: `${discrim} bulunamadı!`,
              };
            return msg.channel.send({embed});
        } else {
            let embed = {
                color: 3447003,
                description: `${users.join('\n ')}`,
              };
            return msg.channel.send({embed});

}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['büyük-harf-engelle', 'büyükharfengelle', 'caps-engelle', 'capssngelle', 'büyükharf-engel'],
		permLevel: 4,
    kategori: "ayarlar",
	};
	  
	exports.help = {
		name: 'büyükharf-engelle',
		description: 'Büyük harf engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'büyükharf-engelle <aç/kapat>',
    
	};