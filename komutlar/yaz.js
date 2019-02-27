const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first();
  let kalem = await db.fetch(`kalem_${message.author.id}`);
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
 
  if (kalem < 1) {
		message.channel.send(`${client.emojis.get(client.emojiler.hayır)} Bu komutu kullanmak için **kalem** satın alman gerekmektedir.\n kalem satın almak istersen **${prefix}market** yazabilirsin.`)
} else if  (kalem > 1) {
  if (!user) return message.reply('Bir kişiyi etiketlemelisin!');
  
  if (user.bot === true) return message.reply('Bir insanı etiketle bot değil!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yazılmasını istediğin yazıyı yazmalısın!');
  if (mesaj.includes("@everyone")) return message.reply(`${client.emojis.get(client.emojiler.hayır)} Etiketi attıramazsın!`);
  if (mesaj.includes("@here")) return message.reply(`${client.emojis.get(client.emojiler.hayır)} Etiket attıramazsın!`);
  
  let x = /(m a l|ma l|m al|amk|sg|oç|sik|amına|amın|orospu|orospo|çocuğu|orosbu|orosbo|cocugu|mal|salak|kapçuk|amcık|amcuk|sikik|amk malı|amına kodum|amınakoduğum|amına koduğum)/
  if (mesaj.match(x)) return message.reply(`${client.emojis.get(client.emojiler.hayır)} Attıracağın mesaj küfür barındıramaz!`);
  
  message.delete();
  
  try {
  
  message.channel.createWebhook(user.username, user.avatarURL) //make the webhook with the authors name and avatar
    .then(wb => {
        const w = new Discord.WebhookClient(wb.id, wb.token) //get the webhook
        w.send(mesaj); //send the msg
        w.delete() //delete the webhook
    })
    
  } catch (err) {
  
    message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
    
  };
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'webhook', 'yaz'],
  permLevel: 0,
    kategori: "eğlence",
  //aktifmi: false
};

exports.help = {
  name: 'yazdır',
  description: 'İstediğiniz yazıyı bota webhook ile etiketlenen kullanıcının ağzından yazdırır.',
  usage: 'yazdır <@kullanıcı> <yazı>'
};
