const Discord = require('discord.js');
const cleverbot = require("cleverbot.io");
const clever = new cleverbot("yRT2w1GqlMtezdq9", "RdmCkKfr0yfOTPMYS2CWpDysSSEWsENr");

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
  var soru = args.slice(0).join(' ');
  if (soru.length < 1) return message.reply('Lütfen bir soru belirtiniz')
  
  var m = await message.channel.send(`${client.emojis.get(client.emojiler.yukleniyor)} Birazcık bekle düşünüyorum...`)
    clever.setNick("Yapay Zeka");
    clever.create(function(err, session) {
        clever.ask(soru, function(err, res) {
            return m.edit(`<@${message.author.id}>, ${res}`)
        });
    });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soru-sor'],
  permLevel: 0,
    kategori: "eğlence",
 
};

exports.help = {
  name: 'sor',
  description: 'Yapay zeka ile sorularınıza cevap verir.',
  usage: 'sor <soru>',
 
};
 