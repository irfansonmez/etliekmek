const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    let cooldown = 1.728e+8, // 24 Часа
        amount = Math.floor(Math.random() * 10) + 200;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        

        const embed = new Discord.RichEmbed()
        .setTitle('Günlük Ödül!')
        .setColor('#FFBA4A')
        .setDescription(`Bunu zaten topladın lütfen bekleyin **${timeObj.hours} saat ${timeObj.minutes} dakika**!`)
        message.channel.send(embed);
        
    } else {
      
        const Durum = await db.fetch(`bonus_${message.author.id}`);
      
           
        var bns = ''

                if (Durum === '1') { var bns = 'green' }
                if (Durum === '2') { var bns = 'grey' }
                if (Durum === '3') { var bns = 'red' }
                if (Durum === '4') { var bns = 'yellow' }
                if (Durum === '5') { var bns = 'yellow' }
      
        let meslekA = await db.fetch(`meslekA_${message.author.id}`);
        let meslek = await db.fetch(`meslek_${message.author.id}`);
        

        const embed = new Discord.RichEmbed()
        .addField('Topladın!', `Başarıyla topladınız ${amount} TL!`)
        .addField(`Meslek`, `Çalıştığı meslek: **${meslek === null  ? "Meslek sahibi değil" : `${meslekA}`}**\nMaaş: **${meslek === null  ? "0" : `${meslek}`}** `)
        .setColor('#59FF4A')
        message.channel.send(embed);

     //   db.set(`lastDaily_${message.author.id}`, Date.now());
      
        db.add(`bonus_${message.author.id}`, 1)
        db.add(`paracık_${message.author.id}`, amount);
        db.add(`paracık_${message.author.id}`, meslek === null  ? "0" : meslek);
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['paraçek','para-çek', 'günlüködül', 'günlük-ödül'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'günlük',
  description: 'Günlük maaşınızı verir.',
  usage: 'günlük',
   
};