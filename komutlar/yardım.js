const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, msg, args, dil) => {
  const client = bot

  let x = args[0]

 // let yana = await bot.emojis.get(bot.emojiler.yan);
let yana = "-";

  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || bot.ayarlar.prefix;
const footer = `${bot.emojis.get(bot.emojiler.kalpSarılmalı)} ${bot.user.username} Botunu eklemeyi ve [oy vermeyi](https://discordbots.org/bot/${bot.user.id}/vote) unutmayın.`;

let arr = [];
client.commands.forEach(x => {
if (!arr.includes(x.conf.kategori)) {
arr.push(x.conf.kategori)
}
})
arr.map(k => k).join("\n")
  
  msg.channel.sendCode
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını listeler',
  usage: 'yardım'
};
