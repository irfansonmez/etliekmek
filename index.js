// ıkarken yapılacaklar



/*
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)
*/
if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const ms = require('parse-ms');


const db = require('quick.db');
const jimp = require('jimp');
const Jimp = require('jimp')
const snekfetch = require('snekfetch');
const useful = require('./x.js');


let komutum = JSON.parse(fs.readFileSync("./komutlar.json", "utf8"));

client.cmdd = komutum



client.useful = useful;
require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");
client.emojiler = {

   "gold": "532931814730366980",  //?PARAM DAKİ ALTIN EMOJİSİ      
   "paraGitti": "596113587853066254",  // X İŞARETİ          
   "paraGitmedi": "596113587823443988", // TİK İŞARETİ      
   "paraROZET": "533265960002650123", // PARA İLE ALINAN YILDIRIM ROZET EMOJİSİ  
   "onayRozet": "527573460814135306" , // ONAY ROZETİ
   "modRozet": "539489890014855178", // MOD ROZETİ
   "yetkiliRozet": "539489890434285568", // YETKİLİ ROZETİ
   "destekçiRozet": "539489889977237530",
   "evet": "596113587823443988",  // TİK İŞARET       
   "hayır": "596113587853066254", // X İŞARETİ  
   "kendineParaYollama": "624326629921128457", // KENDİNE PARA ATMAYA ÇALIŞANLAR İÇİN SİNİRLİ EMOJİSİ      
   "konfeti": "535023706104266762", // MESLEK SAHİBİ OLUNCA RENGARENK KONFETİ ATIYOR  
   "yukleniyor": "615150130320113664", // YÜKLENİYOR EMOJİ İŞTE :D     
   "sinirli": "534004856558714890", // TİTREYEN SİNİRLİ :D       
   "mutlu": "536478990597095424", // MUTLU EMOJİ                   
   "rahatsızetme": "572160230775848961", // RAHATSIZ ETMEYİN EMOJİSİ    
   "çevrimiçi": "572160231153598464", // ÇEVRİMİÇİ EMOJİSİ  
   "yayıncı": "615895130553188352", // YAYINCI EMOJİSİ 
   "çevrimdışı": "572160231493206016", // ÇEVRİM DIŞI EMOJİSİ  
   "boşta": "572160231472234589", // BOŞTA EMOJİSİ     
   "bot": "615897544257437741", // BOT EMOJİSİ          
   "polis": "618475039691636738", // POLİS EMOJİ   
   "Yvar": "558194776172658689", // YETKİLERİM KOMUDUNDAKİ TİK İŞARETİ
   "Yyok": "596113587853066254", // YETKİLERİM KOMUDUNDAKİ X İŞARETİ
   "yan": "538809641036152853", // > GİBİ EMOJİ İŞTE :ç
   "kalpSarılmalı": "561146492648161284",
   "olumlu": "",
   "olumsuz": "",
  
  // AYARLAR KOMUDUNDAKİ AÇIK KAPALI EMOJİLERİ >>>>>>>>>>>>>>>>>
  "kapalıA": "590150824798453760",
  "açıkA": "590150824873820173",
  
  // AÇIK BONUS EMOJİLERİ -------------- >>>>>>>>>>
  
  "açıkB": "549204804468211740", // B
  "açıkO": "549204805151621141", // O
  "açıkN": "549204804446978058", // N
  "açıkU": "549204806796050462", // U
  "açıkS": "549204806380552202", // S
  
  // KAPALI BONUS EMOJİLERİ ---------------- >>>>>>>>>>>>>
  
  "kapalıO": "549205266130927648", // O
  "kapalıN": "549205265702977542", // N
  "kapalıU": "549205268051787776", // U
  "kapalıS": "549205267246612482", // S
}

client.ayarlar = {
        "oynuyor": "k!yardım | panel.konyatr.ml",
        "official_sahip": "580454771643777031",
        "sahip": ['580454771643777031',"580454771643777031", "580454771643777031"],
        "yardimcilar": [''],
        "isim": "KONYA TR",
        "botD": "https://discordapp.com/oauth2/authorize?client_id=580831888000942143&scope=bot&permissions=2146958847",
        "webS": "http://panel.konyatr.ml",
        "web": "http://panel.konyatr.ml",
        "dblO": "https://discordbots.org/bot/580831888000942143/vote",
        "dbl": "https://discordbots.org/bot/580831888000942143",
        "dbltoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MDgzMTg4ODAwMDk0MjE0MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY2NjU3ODg4fQ.40Ea52pZjkdd70c4TrS3JO4S6CHyakeACmkzVvNIRVk",
        "webpanel": "http://panel.konyatr.ml",
        "versiyon": "1.0.0",
        "prefix": "k!",
        "renk":  "DARKBLUE",
        "version":  "1.0.0",
 };
client.avatarURL = `https://images-ext-2.discordapp.net/external/WpLsY51kpd9k8JTbOnFg8yZ8mspFnGeCakZRSLSNYCE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/580831888000942143/864b59af6fb9dc51c9ebbb68fa45070e.png?width=300&height=300`
const ayarlar = client.ayarlar;

client.tr = require('./tr.js');
client.en = require('./en.js');

//var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};





                         
 
  client.ayar = db;
   






client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 
  
  console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
  client.user.setStatus("dnd");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'WATCHING' });
  
})
  
  
  
 

////////anti spam//////






/*
client.on('guildMemberAdd', async member => {
 
  //	let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
   //  if (!kanal) return
  const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://pngimg.com/uploads/alien/alien_PNG103.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'MEETRHosgeldin.png');

	member.guild.channels.get('531535859594297364').send(`Sunucuya hoşgeldin, ${member}!`, attachment);
});


client.on('guildMemberRemove', async member => {
  
	//let kanal = await db.fetch(`hgKanal2_${member.guild.id}`)
    //if (!kanal) return
    const Canvas = require('canvas')
	const canvas = Canvas.createCanvas(900, 280);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://pngimg.com/uploads/alien/alien_PNG103.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.user.tag}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.user.tag}`, canvas.width / 3.7, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL || member.user.defaultAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'MEETRGuleGule.png');

	member.guild.channels.get('531535859594297364').send(`Güle güle, **${member.user.tag}**`, attachment);
});


const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    let fontSize = 54;

    do {
  
    ctx.font = `${fontSize -= 2}px Helvetica`;
    } while (ctx.measureText(text).width > canvas.width - 111);

    return ctx.font;
};

*/

const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  try{
  if (db.has(`dKanal_${member.guild.id}`) === true) {
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
   
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
   
    const kanal = member.guild.channels.get(db.fetch(`dKanal_${member.guild.id}`));
 
    kanal.send(`\`${member.user.tag}\` adlı kullanıcı \`${inviter.tag}\` adlı kullanıcının ${invite.code} linkine sahip daveti ile sunucuya katıldı!`);
  

   
  });
  } else {
    return
  }
  } catch(err) {
    return
  }
});

client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/582167338405593088/619547018339024896/vortex-guvenlik.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'STARKs-güvenlik.png');
    chan.send(attachment)
});
client.on("message", async message => {
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${client.ayarlar.prefix}afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
        let süre = await db.fetch(`afk_süre_${message.author.id}`);
    let timeObj = ms(Date.now() - süre);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.reply("<:onay:558194776755666946> Başarıyla AFK modundan çıktın."+" ``"+timeObj.days+` gün `+timeObj.hours+` saat `+timeObj.minutes +` dakika `+"`` "+"süre boyunca AFK'tın.");
  }
  
  var USER = message.mentions.users.first();
  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);
//    message.channel.send(`${USER.tag} adlı kullanıcı ${REASON} sebebiyle ```+timeObj.hours+`h`+timeObj.minutes+`m`+timeObj.seconds +`s`+ ```dır AFK.` )
    
    //    message.channel.send(USER.tag+'adlı kullanıcı'+```${REASON}``` +'sebebiyle,'+ ```${timeObj.hours}saat ${timeObj.minutes}dakika ${timeObj.seconds}saniye```+"dir AFK.' ' )
        message.reply("``"+USER.username+"``"+" adlı kullanıcı "+"``"+REASON+"``"+" sebebiyle " +"``"+timeObj.days+` gün `+timeObj.hours+` saat `+timeObj.minutes +` dakika`+"``"+ "'dır AFK.")
  }
  
  
    if (!message.guild) return;
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  if (message.author.bot) return;



  if (message.content === `<@${client.user.id}>`) {
    
    message.channel.send(`• Bu sunucuya ait ön-ek/prefix: \`${prefix}\` \n• Bu sunucuya ait yardım komutu: \`${prefix}yardım\` \n• Ön-ek/Prefix değiştirilse bile komutlar etiket ile çalışır. \nÖrnek: \`@${client.user.tag}\`yardım`)
    
  }
  
  if (message.content === `<@${client.user.id}> ${message.content}`) {
    
    message.channel.send(`• Bu sunucuya ait ön-ek/prefix: \`${prefix}\` \n• Bu sunucuya ait yardım komutu: \`${prefix}yardım\` \n• Ön-ek/Prefix değiştirilse bile komutlar etiket ile çalışır. \nÖrnek: \`@${client.user.tag}\`yardım`)
    
  }
});
client.on("message", async message => {
  
  let client = message.client;
  
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)

  if (!message.guild) return;

  let prefix;
  
if (db.has(`prefix_${message.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${message.guild.id}`)
}
  
if (db.has(`prefix_${message.guild.id}`) === false) {
  prefix = ayarlar.prefix
}
  
   const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const p = String(message.content.match(prefixMention));
  
  if (message.author.bot) return;
  if (!message.content.startsWith(p)) return;
  const args = message.content.slice(p.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   } else
    if (client.english.has(command)) {
    cmd = client.english.get(command);
    }
  
  
  

  if (cmd) {
    
    if (db.has(`karalist_${message.author.id}`) === true) {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Sen botun komutlarını kullanamazsın! Çünkü botun kara listesindesin!")
    message.channel.send({embed: embed})
    message.react("😡")
    return
  };
    
    //if (ayarlar.sahip.includes(message.author.id)) return;
    
    if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !client.ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut şuanda sunucularda kullanıma kapalıdır! (Yapım aşamasındadır)`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
      }
    }
    
    if (cmd.conf.bakim === false) {
      //if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut bakımdadır.`)
					.setColor("RANDOM")
				message.channel.send({embed})
				/*return
      }*/
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES") & !client.ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Mesajları Yönet iznine sahip olmalısın!`)
          .setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS") & !client.ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri At iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS") & !client.ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri Yasakla iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR") & !client.ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Yönetici iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id) && !client.ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu sadece Bot Sahibi kullanabilir!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
    
    cmd.run(client, message, args,);
    
  }
  
});
client.on('guildCreate', async guild => {
   var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
       
  var guildhook = new Discord.WebhookClient("614827529068478484", "jfX_NliLr92JT4WGN9q2Uhywp2nFVjAztdnw-brF9aXn3ge43yhI9Ubh75_FWRs-m64G")
        //https://discordapp.com/api/webhooks/551481876062273570/3DnJc2MXtFgtNYTyE93c3Lw3o9GQjzTf-gHb-cE1RzPGxP_KyW5Z6Iun5hNoIPdZR062
        
        const server = new RichEmbed()
  .setColor('GREEN')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucuya Eklendim!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  guildhook.send(server);
})

client.on("guildDelete", async guild => {
  var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
        

  var guildhook = new Discord.WebhookClient("614827831754620938", "4x2Angtd13G0bDXXIByRNaASXUMuaMO1F7DzEE8narl-_g2fOUIkvBCqymabrkLNtDeC")
        // https://discordapp.com/api/webhooks/538374610669010954/BcMbfOHukB1iyyy-lFYPbUkjm1VdcDxOdRS35urWLkqjOnM5reZ6duYmW5yaudgGpVDx
           const server = new RichEmbed()
  .setColor('RED')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucudan Atıldım!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  guildhook.send(server);
})

client.on("message", async msg => {
  
  
 

  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
 
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
 
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (mesaj.member.permissions.has("ADMINISTRATOR") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  if (!msg.guild) return;
 
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

     
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
        }
    }
        }





})


client.on("messageUpdate", async (msg) => {
  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
  
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
  
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (mesaj.member.permissions.has("ADMINISTRATOR") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  if (!msg.guild) return;
  
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

      
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
       if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
       }
    }
        }

  
});


client.on("message", async message => {
  
  if (!message.guild) return;
  
    if(db.has(`sayac_${message.guild.id}`) === true) {
        if(db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
            .setTitle(`Tebrikler ${message.guild.name}!`)
            .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            .setColor("RANDOM")
            message.channel.send({embed})
            message.guild.owner.send({embed})
            db.delete(`sayac_${message.guild.id}`)
        }
    }
})








client.on("guildMemberRemove", async member => {
    if (db.has(`sayac_${member.guild.id}`) === false) return
    if (db.has(`sKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`sKanal_${member.guild.id}`)
    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` üye kaldı!`)
})


//let ot = JSON.parse(fs.readFileSync("./jsonlar/otoR.json", "utf8"));


client.on("guildMemberAdd", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
  const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const giris = db.fetch(`girisM_${member.guild.id}`)
  
    member.guild.channels.get(hgK).send(db.has(`girisM_${member.guild.id}`) ? giris.replace('{kullanıcı}', `<@${member.user.id}>`).replace("{user}", `<@${member.user.id}>`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `<@${member.user.id}> Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir.)`);
});

client.on("guildMemberRemove", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
   const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const cikis = db.fetch(`cikisM_${member.guild.id}`)
  
  member.guild.channels.get(hgK).send(db.has(`cikisM_${member.guild.id}`) ? cikis.replace('{kullanıcı}', `**${member.user.username}**`).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `**${member.user.username}** Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir.)`);
});




client.on("message",async  message => {

  if (!message.guild) return;
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  if(message.content.startsWith(prefix)) {
        let komutum = client.cmdd
        if(komutum[message.guild.id]) {
            for (var i = 0; i < Object.keys(komutum[message.guild.id]).length; i++) {
                if(message.content.slice(prefix.length) === Object.keys(komutum[message.guild.id][i])[0]) {
                   
                    message.channel.send(komutum[message.guild.id][i][Object.keys(komutum[message.guild.id][i])])
                  
                    return
                }
            }
        }
    }
});


client.on('message', async msg => {
  
  if (!msg.guild) return;
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  
  if(!msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`))) return
  var s = 'tr'
  var r = 'Destek Ekibi'
  var k = 'destek-kanalı'
    if(db.has(`dil_${msg.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
        var k = 'support-channel'
    }
  const dil = s
  
  let rol = '';
  let kanal = '';
  
  if (db.has(`destekK_${msg.guild.id}`) === true) {
 kanal = msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`)).name
  }
  
  if (db.has(`destekK_${msg.guild.id}`) === false) {
  kanal = k
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === true) {
  rol = msg.guild.roles.get(db.fetch(`destekR_${msg.guild.id}`))
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === false) {
  rol = r
  }
  
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== kanal) {
     if (msg.author.bot) return;
    /*if (!msg.guild.roles.exists("name", rol)) return msg.reply(client[dil].desteksistem.rolyok.replace("{rol}", r)).then(m2 => {
            m2.delete(5000)});*/
    if (msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`)) {
      
      msg.author.send(client[dil].desteksistem.aciktalepozel.replace("{kisi}", msg.author.tag).replace("{kanal}", `${msg.guild.channels.get(msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).id)}`))
      msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).send(client[dil].desteksistem.aciktalep.replace("{kisi}", msg.author.tag).replace("{sebep}", msg.content))
      
      msg.delete()
      return
    }
    if(msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      const category = msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)
      c.setParent(category.id)
      let role = msg.guild.roles.find(r => r.name === rol.name);
      let role2 = msg.guild.roles.find(r => r.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
      .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== kanal) {
    if(!msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(client[dil].desteksistem.kategori, 'category').then(category => {
      category.setPosition(1)
      let every = msg.guild.roles.find(c => c.name === "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find(c => c.name === rol.name);
      let role2 = msg.guild.roles.find(c => c.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
      .setTitle(`_Merhaba ${msg.author.username}!_`)
     .addField(`» Destek Talebi Hakkında Bilgilendirme «`, `Yetkililerimiz en yakın zamanda burada sorunun ile ilgilenecektir! \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilir, \nSunucudaki tüm Destek Taleplerini kapatmak için ise \`${prefix}talepleri-kapat\` yazabilirsin!`)
      .addField(`» Destek Talebi Sebebi «`, `${msg.content}`, true)
      .addField(`» Destek Talebini Açan Kullanıcı «`, `<@${msg.author.id}>`, true)
      .setFooter(`${msg.guild.name} adlı sunucu ${client.user.username} Destek Sistemi'ni kullanıyor teşekkürler!`, msg.guild.iconURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! ** \n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!`)
      msg.delete()
      }).catch(console.error);
    })
  }
}
})

client.on('message', async message => {
    if(!message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))) return

  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Destek Talebi Kapatma İşlemi!`)
  .setDescription(`Destek talebini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
  

  
  //if (!message.guild) return;
  
 // let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  

  // const dil = s
  
  
  
});

//log sistemi

//let logA = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));

client.on("guildMemberAdd", member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  if (db.has(`log_${member.guild.id}`) === false) return;
  
  var kanal = member.guild.channels.get(db.fetch(`log_${member.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Sunucuya Bir Kullanıcı Katıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  kanal.send(embed);
  
});

client.on("guildMemberRemove", member => {
  
  //if (member.author.bot) return;
  
 // if (!logA[member.guild.id]) return;
  
  var user = member.user;
  var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
  var tarih2 = ''
			if(moment(user.joinedAt).format('MM') === '01') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ocak ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '02') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Şubat ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '03') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mart ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '04') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Nisan ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '05') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Mayıs ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '06') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Haziran ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '07') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Temmuz ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '08') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ağustos ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '09') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Eylül ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '10') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Ekim ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '11') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Kasım ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.joinedAt).format('MM') === '12') {
				var tarih2 = `${moment(user.joinedAt).format('DD')} Aralık ${moment(user.joinedAt).format('YYYY HH:mm:ss')} `
			}
  
  //var kanal = member.guild.channels.get(logA[member.guild.id].log);
  
  if (db.has(`log_${member.guild.id}`) === false) return;
  
  var kanal = member.guild.channels.get(db.fetch(`log_${member.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Sunucudan Bir Kullanıcı Ayrıldı!`, member.user.avatarURL)
  .addField("Kullanıcı Tag", member.user.tag, true)
  .addField("ID", member.user.id, true)
  .addField("Discord Kayıt Tarihi", tarih, true)
  .addField("Sunucuya Katıldığı Tarih", tarih2, true)
  .setThumbnail(member.user.avatarURL)
  kanal.send(embed);
  
});

client.on("messageDelete", message => {
  
  if (message.author.bot) return;
  
    

db.set(`atan_${message.channel.id}`, `${message.author.tag}`)
db.set(`mesaj_${message.channel.id}`, message.content)
  
  //if (!logA[message.guild.id]) return;
  
  var user = message.author;
  
  //var kanal = message.guild.channels.get(logA[message.guild.id].log);
  
  if (db.has(`log_${message.guild.id}`) === false) return;
  
  var kanal = message.guild.channels.get(db.fetch(`log_${message.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("ID", message.author.id, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  kanal.send(embed);
  
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
 // if (!logA[oldMsg.guild.id]) return;
  
  var user = oldMsg.author;
  
  //var kanal = oldMsg.guild.channels.get(logA[oldMsg.guild.id].log);
  
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);
  
});

client.on("roleCreate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleDelete", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
 var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleUpdate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`log_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.get(db.fetch(`log_${oldMember.guild.id}`))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user.tag} adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
    
  }
});


// PROFİL SİSTEMİ BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BAŞLAR BU ARADA --------------------------------------------



client.on("message", async message => {
    var onay = client.emojis.get(client.emojiler.evet);
  var red = client.emojis.get(client.emojiler.hayır);
      const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;



     let i = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

    let prefix;
    if (i) {
        prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] + " " : i;
    } else {
        prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] + " " : `${message.guild.commandPrefix}`;
    }

    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();


    
   




  
    if (command === 'profil' || command === 'profile') {
      message.channel.startTyping()
      var xp = db.fetch(`puancik_${user.id + message.guild.id}`);
        var lvl = db.fetch(`seviye_${user.id + message.guild.id}`);  
        var user = message.mentions.users.first() || message.author;
        let memberID = await db.fetch(`memberID_${user.id}`);
        if (memberID == null) memberID = 'Biyografi mesaji ayarlanmamis.'
        let membername = await db.fetch(`membername_${user.id}`);
        if (membername == null) membername = `${user.tag}`
        let memberBadge = await db.fetch(`memberBadge_${user.id}`);
        
    


        if (memberBadge == null) memberBadge = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge2 = await db.fetch(`memberBadge2_${user.id}`);
        if (memberBadge2 == null) memberBadge2 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge3 = await db.fetch(`memberBadge3_${user.id}`);
        if (memberBadge3 == null) memberBadge3 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge4 = await db.fetch(`memberBadge4_${user.id}`);
        if (memberBadge4 == null) memberBadge4 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge5 = await db.fetch(`memberBadge5_${user.id}`);
        if (memberBadge5 == null) memberBadge5 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge6 = await db.fetch(`memberBadge6_${user.id}`);
        if (memberBadge6 == null) memberBadge6 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        // https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png
      
				const bg = await Jimp.read("https://cdn.discordapp.com/attachments/521363740755623986/528277129989849130/unknown.png");
				const userimg = await Jimp.read(user.avatarURL);
				const onay = await Jimp.read(`${memberBadge}`);
				const ekip = await Jimp.read(`${memberBadge2}`);
				const destek = await Jimp.read(`${memberBadge3}`);
				const mod = await Jimp.read(`${memberBadge4}`);
        const partner = await Jimp.read(`${memberBadge5}`);
        const paraR = await Jimp.read(`${memberBadge6}`);
				var font;
				if (membername.length < 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (membername.length > 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font2;
				if (user.tag.length < 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font3;
				if (user.tag.length < 34) font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 34) font3 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
				else font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font4;
				if (user.tag.length < 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				await bg.print(font, 365, 45, `${membername}`);
				await bg.print(font2, 40, 300, `Xp: ${xp || 0}`);
				await bg.print(font2, 40, 340, `Seviye: ${lvl || 0}`);
				await bg.print(font3, 40, 380, `Biyografi: ${memberID}`);
				await userimg.resize(210, 220);
				await (!userimg.resize(214, 220));
				await onay.resize(32, 32);
				await ekip.resize(32, 32);
				await destek.resize(32, 32);
				await mod.resize(32, 32);
        await partner.resize(32, 32);
        await paraR.resize(32, 32);
        await bg.composite(paraR, 370, 100).write("./img/paraR/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(onay, 410, 100).write("./img/onay/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(ekip, 490, 100).write("./img/ekip/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(destek, 450, 100).write("./img/destek/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(mod, 530, 100).write("./img/mod/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(partner, 500, 100).write("./img/mod/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(userimg, 143, 27.8).write("./img/userimg/" + client.user.id + "-" + user.id + ".png");
      
				  setTimeout(function () {
message.channel.send(`:pencil: **| ${user.username} adlı kullanıcının profil kartı**`)
						message.channel.send(new Discord.Attachment("./img/userimg/" + client.user.id + "-" + user.id + ".png"));
				  }, 1000);
				  setTimeout(function () {
					fs.unlink("./img/userimg/" + client.user.id + "-" + user.id + ".png");
				  }, 10000);
      message.channel.stopTyping()
    }

  /*
    if (command === 'rütbe' || command === 'rank') {
      message.channel.startTyping()
        var user = message.mentions.users.first() || message.author;
        let membername = await db.fetch(`membername_${user.id}`);
        if (membername == null) membername = `${user.tag}`
				const bg = await Jimp.read("https://cdn.discordapp.com/attachments/458732340491845633/482242581040988160/fadawdawdawd.png");
				const userimg = await Jimp.read(user.avatarURL);
				var font;
				if (user.tag.length < 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				else if (user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				else font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font2;
				if (user.tag.length < 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				else if (user.tag.length > 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				else font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				await bg.print(font2, 100, 75, `GP: ${userData.points}`);
				await bg.print(font2, 100, 55, `Level: ${userData.level}`);
				await bg.print(font, 103, 10, membername);
				await userimg.resize(90, 90);
				await (!userimg.resize(90, 90));
        await bg.composite(userimg, 5, 5).write("./img/rank/" + client.user.id + "-" + user.id + ".png");
				  setTimeout(function () {
message.channel.send(`:pencil: **| ${user.username} adlı kullanıcının rütbe kartı**`)
						message.channel.send(new Discord.Attachment("./img/rank/" + client.user.id + "-" + user.id + ".png"));
				  }, 1000);
				  setTimeout(function () {
					fs.unlink("./img/rank/" + client.user.id + "-" + user.id + ".png");
				  }, 10000);
      message.channel.stopTyping()
    }
    */

    if (command === "bioayarla" || command === "biyografi" || command === "biyografi-ayarla" || command === "hakkında") {

      var biyo = args.slice(0).join(' ');
      if (biyo.length < 1) return message.reply('Lütfen biyografinizi yazınız!')

        if (args.join(' ').length > 35) return message.channel.send(`${red} En fazla 35 karakter girebilirsiniz.`)
        
        if (!args.join(" ") && args.join(" ").toLowerCase() === `none`)
            return message.channel.send(`Uyarı: Geçerli bir yazı yazmalısın.\nDoğru kullanım: ${prefix}biyografi Leınx'S bot adamdır.`)
        let newMessage;
        if (args.join(" ").toLowerCase() === `none`) newMessage = '';
        else newMessage = args.join(" ").trim();
       const i = await db.set(`memberID_${message.author.id}`, newMessage)
            return message.channel.send(`${onay} Yeni biyografin ayarlandı.`)
        }
    
  
    if (command === "isim" || command === "isimayarla") {
        if (args.join(' ').length > 15) return message.channel.send(`${red} En fazla 15 karakter girebilirsiniz.`)

        var isim = args.slice(0).join(' ');
        if (isim.length < 1) return message.reply('Lütfen bir isim giriniz!')

        
        let newMessage;

      
  

        if (args.join(" ").toLowerCase() === `none`) newMessage = '';
        else newMessage = args.join(" ").trim();
      const i = await db.set(`membername_${message.author.id}`, newMessage)
            return message.channel.send(`${onay} Yeni ismin ayarlandı.`)
        }
    
  
        if (command === "rozet-parar") {
          if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channek.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
          const i = await db.set(`memberBadge6_${user.id}`, "https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png")
              return message.channel.send(`${onay} Verdım aşkm.`)
          
      }

    if (command === "rozet-onayla") {
        if (message.author.id !== "580454771643777031"  && message.author.id !== "580454771643777031" ) return message.channek.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845736347435015/401725450470031362.png")
            return message.channel.send(`${onay} Kullanıcıya onay rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-konay" || command === "rozet-konayla") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`${onay} Kullanıcıdan onay rozeti alınmıştır.`)
        
    }
  
    if (command === "rozet-yetkili" || command === "rozet-ekip") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge2_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845736347435009/401723658491527168.png")
            return message.channel.send(`${onay} Kullanıcıya ekip rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-kyetkili" || command === "rozet-kekip") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge2_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`${onay} Kullanıcıdan ekip rozeti alınmıştır.`)
        
    }
  
    if (command === "rozet-destekci" || command === "rozet-destekçi") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge3_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845737006202881/401725034453925889.png")
            return message.channel.send(`${onay} Kullanıcıya destekçi rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-kdestekci" || command === "rozet-kdestekçi") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge3_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`${onay} Kullanıcıdan destekçi rozeti alınmıştır.`)
        
    }
  
    if (command === "rozet-mod" || command === "rozet-moderator") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge4_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845735647117312/401724520806875139.png")
            return message.channel.send(`${onay} Kullanıcıya moderator rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-kmod" || command === "rozet-kmoderator") {
        if (message.author.id !== "580454771643777031" && message.author.id !== "580454771643777031" ) return message.channel.send(`${red} Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge4_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`${onay} Kullanıcıdan moderator rozeti alınmıştır.`)
        
    }
})

// PROFİL SİSTEMİ BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BİTER BU ARADA ---------------------------------------------

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.english = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  //log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.english.set(props.help.enname, props)
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
     
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

const DBL = require("dblapi.js");
const dbl = new DBL(client.ayarlar.dbltoken, client);


client.on('ready', () => {
   setInterval(() => {
        dbl.postStats(client.guilds.size);
  }, 1800);
   });

  dbl.getStats("580831888000942143").then(stats => {
    console.log('DBL ye gerekli verileri girdim.') // {"server_count":2,"shards":[]}
 });

 

  ///////////// SEVİYE  
  
client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 200) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    

    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {
  if (db.has(`rollss_${msg.guild.id}`) === true) {
    
 var r = db.fetch(`roll_${msg.guild.id}`)
 var s = db.fetch(`rollss_${msg.guild.id}`)
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`<@${msg.author.id}> başarıyla **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0}** seviyeyi geçtin ve **${msg.guild.roles.get(r).name}** rolünü aldın!`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };

}};
  
});

  ///////////// SEVİYE  


client.login('NTgwODMxODg4MDAwOTQyMTQz.XYuseg.6sjzFx8I3lGKkFmjued40-Prnpo')
