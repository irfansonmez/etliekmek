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

  let cats = arr.map(k => `- ${k}`).join("\n")
  
  if (!arg) {
    
    
  msg.channel.send(`# ${client.user.username} - Kategoriler

${cats}

> ${prefix}yardım [kategori] yazarak komutları görebilirsiniz.
`, {split: true, code: "md"})
  } else {
  
  let list = client.commands.filter(x => x.conf.kategori === arg)
  
  if (!arr.includes(arg)) return msg.channel.send(`**${arg}** adlı bir kategori bulunamadı!`)
  
  const cmds = Array.from(list.keys())
  const longest = cmds.reduce((long, str) => Math.max(long, str.length), 0);
  
  msg.channel.send(list.map(k => `${k.help.name}${' '.repeat(longest - k.help.name.length)} :: ${k.help.description}`).join("\n"), {split: true, code: "asciidoc"})
  
  }
  
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
