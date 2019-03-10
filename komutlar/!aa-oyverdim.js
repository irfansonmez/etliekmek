const Discord = require('discord.js');
const Jimp = require('jimp');
const db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    let cooldown = 0.05, // 24 Часа
        amount = Math.floor(Math.random() * 10) + 200;      

    let lastDaily = await db.fetch(`oyZ_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        

        const embed = new Discord.RichEmbed()
        .setTitle('Günlük Ödül!')
        .setColor('#FFBA4A')
        .setDescription(`Zaten destekçi rolünü aldın tekrar almak için **${timeObj.hours} saat ${timeObj.minutes} dakika** beklemen gerek!`)
        message.channel.send(embed);
        return
 
    } 

  
     const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${bot.user.id}/check?userId=${message.author.id}`)
.set("Authorization", bot.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if (check == 1) {
    
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('**Destekçi** rolünüzü aldınız botu oyladığınız için teşekkürler, 12 saat sonra rolünüz otomatik alınacaktır ve tekrar oy vererek **destekçi** rolünü alabilirsiniz.')
.setTimestamp()
  message.channel.send('embed')
  message.member.addRole('516611529987063808')
  db.set(`oyZ_${message.author.id}`, Date.now());
    } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${bot.emojis.get(bot.emojiler.hayır)} **Hata**, Destekçi rolünü almak için 12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${bot.user.id}/vote)**  botu oylamanız gerekmektedir. Onayladıktan sonra sisteme geçmesi **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    message.channel.send(embed)
      return }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oy-verdim"],
  permLevel: 5,
  kategori: "efekt"
};

exports.help = {
  name: 'oyverdim',
  description: '',
  usage: ''
};
