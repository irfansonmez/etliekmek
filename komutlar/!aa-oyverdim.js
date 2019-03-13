const Discord = require('discord.js');
const Jimp = require('jimp');
const db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
  
   if(message.guild.id !== '489200365363920896') return message.channel.send('Bu komut sadece destek sunucumda çalışmaktadır.')
 
    if(message.member.roles.has('516611529987063808') === true) return message.channel.send(`Zaten destekçi rolün bulunuyor fazlasını ne yapacaksın`)

 
    

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
  message.channel.send(embed)
  message.member.addRole('516611529987063808')
    } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${bot.emojis.get(bot.emojiler.hayır)} **Hata**, Destekçi rolünü almak için **12** saat aralıkla **[BURADAN](https://discordbots.org/bot/${bot.user.id}/vote)**  botu oylamanız gerekmektedir. Onayladıktan sonra sisteme geçmesi **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    message.channel.send(embed)
      return }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oy-verdim"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: 'oyverdim',
  description: '',
  usage: ''
};
