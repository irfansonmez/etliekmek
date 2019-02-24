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
        return
    } else {
  
 
  
      let aB = bot.emojis.get(bot.emojiler.açıkB);
      let aO = bot.emojis.get(bot.emojiler.açıkO);
      let aN = bot.emojis.get(bot.emojiler.açıkN);
      let aU = bot.emojis.get(bot.emojiler.açıkU);
      let aS = bot.emojis.get(bot.emojiler.açıkS);
      
      let kO = bot.emojis.get(bot.emojiler.kapalıO);
      let kN = bot.emojis.get(bot.emojiler.kapalıN);
      let kU = bot.emojis.get(bot.emojiler.kapalıU);
      let kS = bot.emojis.get(bot.emojiler.kapalıS);
      
        const Durum = await db.fetch(`bonus_${message.author.id}`);
      
           
        var bns = ''

                if (Durum == null || Durum == '0') { var bns = `${aB} ${kO} ${kN} ${kU} ${kS}` }
                if (Durum == '1' || Durum == '2') { var bns = `${aB} ${aO} ${kN} ${kU} ${kS}` }
                if (Durum == '3') { var bns = `${aB} ${aO} ${aN} ${kU} ${kS}` }
                if (Durum == '4') { var bns = `${aB} ${aO} ${aN} ${aU} ${kS}` }
                if (Durum == '5') { var bns = `${aB} ${aO} ${aN} ${aU} ${aS}` }
      
        let meslekA = await db.fetch(`meslekA_${message.author.id}`);
        let meslek = await db.fetch(`meslek_${message.author.id}`);
        
      
      const tplnB = await db.fetch(`bonus_${message.author.id}`); 
        var tbns = ''
       if (tplnB == '5') { var tbns = `${500 + amount}` }
    //   if (tplnB == '1' || tplnB == '2' || tplnB == '3' || tplnB == '4' || tplnB === null || tplnB == '0') { var tbns = `0` }
      
  
        const embed = new Discord.RichEmbed()
        .addField('Topladın!', `Günlük Ödül: **${amount}TL**\nBonus Ödülü **${Durum == '5' ? '500TL' : 'Bonus tamamlanmamış'}**\nToplam Bonus+Günlük: **${tbns || amount}TL**`)
        .addField(`Meslek`, `Çalıştığı meslek: **${meslek === null  ? "Meslek sahibi değil" : `${meslekA}`}**\nMaaş: **${meslek === null  ? "0" : `${meslek}`}**`)
        .addField(`Bonus`,`\n${bns}`)
        .setColor('#59FF4A')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
      
        db.add(`bonus_${message.author.id}`, 1)
        db.add(`paracık_${message.author.id}`, amount);
        db.add(`paracık_${message.author.id}`, bns == 5 ? "500" : "0");
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