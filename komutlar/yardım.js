const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, msg, args, dil) => {
  const client = bot

  let arg = args[0]

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

  let catsArr = arr.map(k => `[${i++}]: ${k}`)
  
  let i = 1
  let cats = arr.map(k => `[${i++}]: ${k}`).join("\n")
  
  msg.channel.send(`# ${client.user.username} - Kategoriler

${cats}

> ${prefix}yardım [kategori/kategori numarası] yazarak komutları görebilirsiniz.
`, {split: true, code: "md"})
  
  if (!client.commands.filter(x => x.conf.kategori === arg)[0]) return msg.channel.send(`**${arg}** ${isNaN(arg) ? "adlı" : "numaralı"} bir kategori bulunamadı!`)
  
  let list = isNaN(arg) ? client.commands.filter(x => x.conf.kategori === arg) : client.commands.filter(x => x.conf.kategori === catsArr[arg])
  
  msg.channel.send(list.map(k => `${k.help.name} :: ${}`), {split: true, code: "asciidoc"})
  
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
  usage: 'yardım [kategori]'
};
