
ç
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
   "paraGitti": "533379120722214937",  // X İŞARETİ          
   "paraGitmedi": "533379123356237835", // TİK İŞARETİ      
   "paraROZET": "533265960002650123", // PARA İLE ALINAN YILDIRIM ROZET EMOJİSİ  
   "onayRozet": "527573460814135306" , // ONAY ROZETİ
   "modRozet": "539489890014855178", // MOD ROZETİ
   "yetkiliRozet": "539489890434285568", // YETKİLİ ROZETİ
   "destekçiRozet": "539489889977237530",
   "evet": "533379120722214937",  // TİK İŞARET       
   "hayır": "533379123356237835", // X İŞARETİ  
   "kendineParaYollama": "534004856558714890", // KENDİNE PARA ATMAYA ÇALIŞANLAR İÇİN SİNİRLİ EMOJİSİ      
   "konfeti": "535023706104266762", // MESLEK SAHİBİ OLUNCA RENGARENK KONFETİ ATIYOR  
   "yukleniyor": "536478214013583372", // YÜKLENİYOR EMOJİ İŞTE :D     
   "sinirli": "534004856558714890", // TİTREYEN SİNİRLİ :D       
   "mutlu": "536478990597095424", // MUTLU EMOJİ                   
   "rahatsızetme": "536480419953115175", // RAHATSIZ ETMEYİN EMOJİSİ    
   "çevrimiçi": "536480420318150667", // ÇEVRİMİÇİ EMOJİSİ  
   "yayıncı": "537015282192089099", // YAYINCI EMOJİSİ 
   "çevrimdışı": "536480420393648129", // ÇEVRİM DIŞI EMOJİSİ  
   "boşta": "536480419437084673", // BOŞTA EMOJİSİ     
   "bot": "536480420062298113", // BOT EMOJİSİ          
   "polis": "536480421685362699", // POLİS EMOJİ   
   "Yvar": "533379120722214937", // YETKİLERİM KOMUDUNDAKİ TİK İŞARETİ
   "Yyok": "533379123356237835", // YETKİLERİM KOMUDUNDAKİ X İŞARETİ
   "yan": "538809641036152853", // > GİBİ EMOJİ İŞTE :ç
   "kalpSarılmalı": "561146492648161284",
   "olumlu": "",
   "olumsuz": "",
  
  // AYARLAR KOMUDUNDAKİ AÇIK KAPALI EMOJİLERİ >>>>>>>>>>>>>>>>>
  "kapalıA": "557283240516517953",
  "açıkA": "557283240679833699",
  
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
        "oynuyor": "Verdiğiniz güzel desteğe karşılık olarak botu kapama kararı verdik iyi günler.",
        "official_sahip": "507803933557915652",
        "sahip": ['336869318874890241',"487515609815580672", "530706106599866380"],
        "yardimcilar": [''],
        "isim": "RYKER",
        "botD": "https://discordapp.com/oauth2/authorize?client_id=516600125649453066&scope=bot&permissions=2146958847",
        "webS": "http://ryker.tk",
        "web": "https://ryker.tk",
        "dblO": "https://discordbots.org/bot/516600125649453066/vote",
        "dbl": "https://discordbots.org/bot/516600125649453066",
        "dbltoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUxNjYwMDEyNTY0OTQ1MzA2NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTUxNjE4MDEwfQ.k435Nz8LEyG2uMQdtuKBOeDanzLi7u7-O5mFQnnuvRE",
        "webpanel": "panel.ryker.xyz",
        "versiyon": "1.0.0",
        "prefix": "?",
        "renk":  "DARKBLUE",
        "version":  "1.0.0",
 };
client.avatarURL = `https://cdn.discordapp.com/avatars/516600125649453066/c866646d27728bdb25fc39161c94a2e8.png?size=2048`
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
  client.user.setStatus("online");
  client.user.setActivity(client.ayarlar.oynuyor, { type: 'WATCHING' });
  
})
  
  
  
 
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



client.login('NTE2NjAwMTI1NjQ5NDUzMDY2.D2wz8A.zo9ozbF_ioBLiav3IdBfx9iUl_8')
