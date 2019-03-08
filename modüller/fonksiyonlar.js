const Discord = require('discord.js');
const db = require('quick.db');
module.exports = (client, clientt) => {

client.panel = {};

client.panel.ayarlarKaydetKullanici = (kullaniciID, kullanici, yeniAyar, req, res) => {
if (yeniAyar['renk']) {
db.set(`${kullanici.id}.renk`, yeniAyar['renk'])
}

if (yeniAyar['resim']) {
db.set(`${kullanici.id}.resim`, yeniAyar['resim'])
}
};

client.panel.ayarlarKaydet = (sunucuID, sunucu, yeniAyar, req, res) => {

try {

if (yeniAyar['prefix']) {
db.set(`prefix_${sunucu.id}`, yeniAyar['prefix'])
}
if (yeniAyar['otorol']) {
db.set(`otoR_${sunucu.id}`, yeniAyar['otorol'])
}
if (yeniAyar['girisCikis']) {
db.set(`gc_${sunucu.id}`, yeniAyar['girisCikis'])
    
}

if (yeniAyar['girisMesaj']) {
db.set(`girisM_${sunucu.id}`, yeniAyar['girisMesaj'])
}
if (yeniAyar['cikisMesaj']) {
db.set(`cikisM_${sunucu.id}`, yeniAyar['cikisMesaj'])
}

if (yeniAyar['küfürEngel'] === 'aktif') {
db.set(`küfürE_${sunucu.id}`, yeniAyar['küfürEngel'])
}
if (!yeniAyar['küfürEngel']) {
db.delete(`küfürE_${sunucu.id}`)
}
if (yeniAyar['linkEngel'] === 'aktif') {
db.set(`linkE_${sunucu.id}`, yeniAyar['linkEngel'])
}
if (!yeniAyar['linkEngel']) {
db.delete(`linkE_${sunucu.id}`)
}
if (yeniAyar['capslockEngel'] === 'aktif') {
db.set(`capsE_${sunucu.id}`, yeniAyar['capslockEngel'])
}
if (!yeniAyar['capsEngel']) {
db.delete(`capsE_${sunucu.id}`)
}

if (yeniAyar['komut'] && yeniAyar['aciklama'] && yeniAyar['tip']) {
if (client.kayıt.komutlar.has(yeniAyar['komut']) === true || client.kayıt.alternatifler.has(yeniAyar['komut'])) return
if (db.has(`özelKD_${sunucu.id}`) === true) {
for (var i = 0; i < db.fetch(`özelKD_${sunucu.id}`).length; i++) {
if (Object.keys(db.fetch(`özelKD_${sunucu.id}`)[i])[0] === yeniAyar['komut']) return
}
}

if (db.has(`${sunucuID}.özelKomutlar`) === false) {
if (yeniAyar['tip'] === 'embed' && yeniAyar['renk']) {
db.set(`${sunucuID}.özelKomutlar`, new Array(JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}", "renk":"${yeniAyar['renk'] || '#ff0000'}"}`)))
}
if (yeniAyar['tip'] !== 'embed') {
db.set(`${sunucuID}.özelKomutlar`, new Array(JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}"}`)))
}
} else {
if (yeniAyar['tip'] === 'embed' && yeniAyar['renk']) {
db.push(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}", "renk":"${yeniAyar['renk'] || '#ff0000'}"}`))
}
if (yeniAyar['tip'] !== 'embed') {
db.push(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}"}`))
} 
}
}

if (yeniAyar['dkomut'] && yeniAyar['ykomut'] && yeniAyar['yaciklama'] && yeniAyar['ytip']) {

for (var i = 0; i < db.fetch(`özelKD_${sunucu.id}`).length; i++) {
if (Object.keys(db.fetch(`özelKD_${sunucu.id}`)[i])[0] === yeniAyar['dkomut']) {
if (db.fetch(`özelKD_${sunucu.id}`)[i].tip === 'embed') {
db.set(`özelKD_${sunucu.id}`, JSON.parse(`{"${Object.keys(db.fetch(`özelKD_${sunucu.id}`)[i])[0]}":"${db.fetch(`özelKD_${sunucu.id}`)[i][Object.keys(db.fetch(`özelKD_${sunucu.id}`)[i])[0]]}", "tip":"${db.fetch(`özelKD_${sunucu.id}`)[i].tip}", "renk":"${db.fetch(`özelKD_${sunucu.id}`)[i].renk}"}`))
}
if (db.fetch(`özelKD_${sunucu.id}`)[i].tip !== 'embed') {
db.set(`özelKD_${sunucu.id}`, JSON.parse(`{"${Object.keys(db.fetch(`özelKD_${sunucu.id}`)[i])[0]}":"${db.fetch(`özelKD_${sunucu.id}`)[i][Object.keys(db.fetch(`özelKD_${sunucu.id}`)[i])[0]]}", "tip":"${db.fetch(`özelKD_${sunucu.id}`)[i].tip}"}`))
}
}
}

if (yeniAyar['ytip'] === 'embed' && yeniAyar['yrenk']) {
db.push(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['ykomut']}":"${yeniAyar['yaciklama']}", "tip":"${yeniAyar['ytip']}", "renk":"${yeniAyar['yrenk'] || '#ff0000'}"}`))
}
if (yeniAyar['ytip'] !== 'embed') {
db.push(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['ykomut']}":"${yeniAyar['yaciklama']}", "tip":"${yeniAyar['ytip']}"}`))
}
}

if (yeniAyar['moderasyon'] === 'aktif') {
db.set(`${sunucuID}.moderasyon`, yeniAyar['moderasyon'])
}

if (!yeniAyar['moderasyon']) {
db.delete(`${sunucuID}.moderasyon`)
}

if (yeniAyar['modlog']) {
db.set(`${sunucuID}.modlog`, yeniAyar['modlog'])
}

if (yeniAyar['ban'] && yeniAyar['banSebep']) {
if (db.has(`${sunucuID}.modlog`) === true) {
var embed = new Discord.MessageEmbed()
.setColor("DARKBLUE")
.setAuthor("Üye Yasaklama")
.addField("Yetkili", `${req.user.username}#${req.user.discriminator}`)
.addField("Kullanıcı", `${sunucu.members.get(yeniAyar['ban']).user.tag}`)
.addField("Sebep", yeniAyar['banSebep'])
sunucu.channels.get(db.fetch(`${sunucuID}.modlog`)).send({embed:embed})
}
setTimeout(() => {
sunucu.members.get(yeniAyar['ban']).ban({reason: yeniAyar['banSebep']})
}, 2000)
}

if (yeniAyar['unban']) {
if (db.has(`${sunucuID}.modlog`) === true) {
require('request')({
url: `https://discordapp.com/api/v7/users/${yeniAyar['unban']}`,
headers: {
"Authorization": `Bot ${client.token}`
}
}, async function(error, response, body) {

var embed = new Discord.MessageEmbed()
.setColor("DARKBLUE")
.setAuthor("Üye Yasağı Kaldırma")
.addField("Yetkili", `${req.user.username}#${req.user.discriminator}`)
.addField("Kullanıcı", `${JSON.parse(body).username}#${JSON.parse(body).discriminator}`)
sunucu.channels.get(db.fetch(`${sunucuID}.modlog`)).send({embed:embed})
});
}
setTimeout(() => {
sunucu.unban(yeniAyar['unban'])
}, 2000)
}

if (yeniAyar['kick']) {
if (db.has(`${sunucuID}.modlog`) === true) {
var embed = new Discord.MessageEmbed()
.setColor("DARKBLUE")
.setAuthor("Üye Atma")
.addField("Yetkili", `${req.user.username}#${req.user.discriminator}`)
.addField("Kullanıcı", `${sunucu.members.get(yeniAyar['kick']).user.tag}`)
sunucu.channels.get(db.fetch(`${sunucuID}.modlog`)).send({embed:embed})
}
setTimeout(() => {
sunucu.members.get(yeniAyar['kick']).kick()
}, 2000)
  
}

if (yeniAyar['sustur'] && yeniAyar['susturK']) {
  sunucu.channels.get(yeniAyar['susturK']).overwritePermissions(sunucu.members.get(yeniAyar['sustur']), {
    SEND_MESSAGES: false
  });
  db.set(`${sunucuID}.mutes.${yeniAyar['sustur']}`, true)
}
  
if (yeniAyar['susturma'] && yeniAyar['susturmaK']) {
  sunucu.channels.get(yeniAyar['susturmaK']).overwritePermissions(sunucu.members.get(yeniAyar['susturma']), {
    SEND_MESSAGES: null
  });
  db.delete(`${sunucuID}.mutes.${yeniAyar['susturma']}`)
}

} catch(err) {
//console.log(err)
}

};

String.prototype.toProperCase = function() {
return this.charAt(0).toUpperCase() + this.slice(1); 
};

Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", (err) => {
const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
console.error("Uncaught Exception: ", errorMsg);

process.exit(1);
});
};