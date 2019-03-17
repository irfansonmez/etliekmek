const Discord = require('discord.js');
const Jimp = require('jimp');


exports.run = async (bot, message, args) => {
var user = message.author;  
if (!message.guild) return message.reply(`Bu komutu sunucularda kullanabilirsin.`);
              
  const db = require('quick.db');
const filter = m => m.author.id === message.author.id;

let hakV = await db.fetch(`şifreH_${message.guild.id}_${message.author.id}`);

var hak = ''

if(hakV == 1) { var hak = `3` }
if(hakV == 2) { var hak = 2 }
if(hakV == 3) { var hak = 1 }
if(hakV == 4) { var hak = 'hAKKINIZ BİTTİĞİ İÇİN KOMUT İPTAL EDİLDİ.' }

var şifre = ''
var request = require('request');
request('https://simsekapi.cf/sifre/8', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
        var şifre = (veri.sifre);
    }
});

const embed = new Discord.RichEmbed()

  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription(`Kayıt olmak için **${şifre}** bu kodu doğru bir şekilde yazınız 3 deneme hakkınız vardır.`)
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 3 yanlış cevap verirseniz veya 2 dakika içinde iptal edilecektir.')
message.author.send(embed)
.then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 200000
  }).then(async (collected) => {
   if (collected.first().content === 'iptal') return message.reply("Başarıyla iptal edildi!")
  let mesaj
  let neblm = collected.first().content

  if(neblm === şifre) {
    message.author.send(`Şifreyi doğru girdiniz, rolünüz verilmiştir.`)
  }
  db.add(`şifreH_${message.guild.id}_${message.author.id}`, 1)
 




})
})
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: ""
};

exports.help = {
  name: 'kayıtol',
  description: '.',
  usage: ''
};