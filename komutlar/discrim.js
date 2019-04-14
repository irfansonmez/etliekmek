const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, msg, args) => {
  
  	const discrim = args[0] || msg.author.discriminator;
        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        if (users < 1) {
            let embed = {
                color: 'RANDOM',
                description: `${discrim} bulunamadı!`,
              };
            return msg.channel.send({embed});
        } else {
       
           msg.channel.send(`

${for(var i = 0;i < users.size; i++) + users.join('\n ')}


`, {split: true, code: "md"})

          
}}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: [],
		permLevel: 0,
    kategori: "kullanıcı",
	};
	  
	exports.help = {
		name: 'discrim',
		description: 'İstediğiniz bir discrimi botun ekli olduğu sunucularda arar',
		usage: 'discrim',
    
	};