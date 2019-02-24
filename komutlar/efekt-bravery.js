const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (bot, message, args) => {

    
    let x = /(-)/
    
    var user = message.mentions.users.first();  
  if (!message.guild) return message.reply(`Bu komutu sunucularda kullanabilirsin.`);

  if (!user) return message.reply('Lütfen kendini veya başkasını etiketle');

  

  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Lütfen **1 ila 8** arasında rakam yazınız');
  if (mesaj.match(x)) return message.reply('Lütfen **1 ila 8** arasında rakam yazınız');

  
  
  if (isNaN(args[1])) return message.channel.send("Lütfen bir sayı gir.")

  if(mesaj > 8) {
    message.channel.send("Lütfen **1 ila 8** arasında rakam yazınız")
  } else if (mesaj < 8) {

    message.channel.send(`${bot.emojis.get(bot.emojiler.yukleniyor)} **Lütfen bekleyiniz. Bu biraz zaman alabilir...**`).then(m => m.delete(3000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            //image.greyscale()
         //   image.gaussian(1)
            Jimp.read(`./efektler/bravery/bravery${mesaj}.png`, (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/efektler/${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/efektler/${user.id}.png`));
                }, 1000);
            });

        });

    } else if (mesaj = 8) {

        message.channel.send(`${bot.emojis.get(bot.emojiler.yukleniyor)} **Lütfen bekleyiniz. Bu biraz zaman alabilir...**`).then(m => m.delete(3000));


          Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            //image.greyscale()
         //   image.gaussian(1)
            Jimp.read(`./efektler/bravery/bravery${mesaj}.png`, (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/efektler/${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/efektler/${user.id}.png`));
                }, 1000);
            });

        });


    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bravery"],
  permLevel: 0,
  kategori: "efekt"
};

exports.help = {
  name: 'hsbravery',
  description: 'Avatarınıza HypeSquad bravery efekti verir.',
  usage: 'hsbravery <@kullanıcı> <sayı>'
};
