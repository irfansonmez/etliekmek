const Discord = require('discord.js');
const db = require('quick.db');
module.exports = (client) => {

client.panel = {};

client.panel.ayarlarKaydetKullanici = (kullaniciID, kullanici, yeniAyar, req, res) => {
if (yeniAyar['renk']) {
client.veritabanı.ayarla(`${kullaniciID}.renk`, yeniAyar['renk'])
}

if (yeniAyar['resim']) {
client.veritabanı.ayarla(`${kullaniciID}.resim`, yeniAyar['resim'])
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
client.veritabanı.ayarla(`${sunucuID}.girisCikis`, yeniAyar['girisCikis'])
}
if (yeniAyar['girisCikisTip']) {
if (yeniAyar['girisCikisTip'] === "varsayılan") {
client.veritabanı.sil(`${sunucuID}.girisCikisTip`)
} else {
client.veritabanı.ayarla(`${sunucuID}.girisCikisTip`, yeniAyar['girisCikisTip'])
}
}
if (yeniAyar['girisMesaj']) {
client.veritabanı.ayarla(`${sunucuID}.girisMesaj`, yeniAyar['girisMesaj'])
}
if (yeniAyar['cikisMesaj']) {
client.veritabanı.ayarla(`${sunucuID}.cikisMesaj`, yeniAyar['cikisMesaj'])
}
if (yeniAyar['spam'] === 'aktif') {
client.veritabanı.ayarla(`${sunucuID}.spam`, yeniAyar['spam'])
}
if (!yeniAyar['spam']) {
client.veritabanı.sil(`${sunucuID}.spam`)
}
if (yeniAyar['spamMesaj']) {
client.veritabanı.ayarla(`${sunucuID}.spamMesaj`, yeniAyar['spamMesaj'])
}
if (yeniAyar['spamUyarı']) {
client.veritabanı.ayarla(`${sunucuID}.spamUyarı`, yeniAyar['spamUyarı'])
}
if (yeniAyar['küfürEngel'] === 'aktif') {
client.veritabanı.ayarla(`${sunucuID}.küfürEngel`, yeniAyar['küfürEngel'])
}
if (!yeniAyar['küfürEngel']) {
client.veritabanı.sil(`${sunucuID}.küfürEngel`)
}
if (yeniAyar['linkEngel'] === 'aktif') {
client.veritabanı.ayarla(`${sunucuID}.linkEngel`, yeniAyar['linkEngel'])
}
if (!yeniAyar['linkEngel']) {
client.veritabanı.sil(`${sunucuID}.linkEngel`)
}
if (yeniAyar['capslockEngel'] === 'aktif') {
client.veritabanı.ayarla(`${sunucuID}.capslockEngel`, yeniAyar['capslockEngel'])
}
if (!yeniAyar['capslockEngel']) {
client.veritabanı.sil(`${sunucuID}.capslockEngel`)
}

if (yeniAyar['komut'] && yeniAyar['aciklama'] && yeniAyar['tip']) {
if (client.kayıt.komutlar.has(yeniAyar['komut']) === true || client.kayıt.alternatifler.has(yeniAyar['komut'])) return
if (client.veritabanı.varMı(`${sunucu.id}.özelKomutlar`) === true) {
for (var i = 0; i < client.veritabanı.veri(`${sunucu.id}.özelKomutlar`).length; i++) {
if (Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0] === yeniAyar['komut']) return
}
}

if (client.veritabanı.varMı(`${sunucuID}.özelKomutlar`) === false) {
if (yeniAyar['tip'] === 'embed' && yeniAyar['renk']) {
client.veritabanı.ayarla(`${sunucuID}.özelKomutlar`, new Array(JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}", "renk":"${yeniAyar['renk'] || '#ff0000'}"}`)))
}
if (yeniAyar['tip'] !== 'embed') {
client.veritabanı.ayarla(`${sunucuID}.özelKomutlar`, new Array(JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}"}`)))
}
} else {
if (yeniAyar['tip'] === 'embed' && yeniAyar['renk']) {
client.veritabanı.ekle(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}", "renk":"${yeniAyar['renk'] || '#ff0000'}"}`))
}
if (yeniAyar['tip'] !== 'embed') {
client.veritabanı.ekle(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['komut']}":"${yeniAyar['aciklama']}", "tip":"${yeniAyar['tip']}"}`))
} 
}
}

if (yeniAyar['dkomut'] && yeniAyar['ykomut'] && yeniAyar['yaciklama'] && yeniAyar['ytip']) {

for (var i = 0; i < client.veritabanı.veri(`${sunucu.id}.özelKomutlar`).length; i++) {
if (Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0] === yeniAyar['dkomut']) {
if (client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i].tip === 'embed') {
client.veritabanı.çıkar(`${sunucu.id}.özelKomutlar`, JSON.parse(`{"${Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0]}":"${client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i][Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0]]}", "tip":"${client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i].tip}", "renk":"${client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i].renk}"}`))
}
if (client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i].tip !== 'embed') {
client.veritabanı.çıkar(`${sunucu.id}.özelKomutlar`, JSON.parse(`{"${Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0]}":"${client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i][Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0]]}", "tip":"${client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i].tip}"}`))
}
}
}

if (yeniAyar['ytip'] === 'embed' && yeniAyar['yrenk']) {
client.veritabanı.ekle(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['ykomut']}":"${yeniAyar['yaciklama']}", "tip":"${yeniAyar['ytip']}", "renk":"${yeniAyar['yrenk'] || '#ff0000'}"}`))
}
if (yeniAyar['ytip'] !== 'embed') {
client.veritabanı.ekle(`${sunucuID}.özelKomutlar`, JSON.parse(`{"${yeniAyar['ykomut']}":"${yeniAyar['yaciklama']}", "tip":"${yeniAyar['ytip']}"}`))
}
}

if (yeniAyar['moderasyon'] === 'aktif') {
client.veritabanı.ayarla(`${sunucuID}.moderasyon`, yeniAyar['moderasyon'])
}

if (!yeniAyar['moderasyon']) {
client.veritabanı.sil(`${sunucuID}.moderasyon`)
}

if (yeniAyar['modlog']) {
client.veritabanı.ayarla(`${sunucuID}.modlog`, yeniAyar['modlog'])
}

if (yeniAyar['ban'] && yeniAyar['banSebep']) {
if (client.veritabanı.varMı(`${sunucuID}.modlog`) === true) {
var embed = new Discord.MessageEmbed()
.setColor("DARKBLUE")
.setAuthor("Üye Yasaklama")
.addField("Yetkili", `${req.user.username}#${req.user.discriminator}`)
.addField("Kullanıcı", `${sunucu.members.get(yeniAyar['ban']).user.tag}`)
.addField("Sebep", yeniAyar['banSebep'])
sunucu.channels.get(client.veritabanı.veri(`${sunucuID}.modlog`)).send({embed:embed})
}
setTimeout(() => {
sunucu.members.get(yeniAyar['ban']).ban({reason: yeniAyar['banSebep']})
}, 2000)
}

if (yeniAyar['unban']) {
if (client.veritabanı.varMı(`${sunucuID}.modlog`) === true) {
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
sunucu.channels.get(client.veritabanı.veri(`${sunucuID}.modlog`)).send({embed:embed})
});
}
setTimeout(() => {
sunucu.unban(yeniAyar['unban'])
}, 2000)
}

if (yeniAyar['kick']) {
if (client.veritabanı.varMı(`${sunucuID}.modlog`) === true) {
var embed = new Discord.MessageEmbed()
.setColor("DARKBLUE")
.setAuthor("Üye Atma")
.addField("Yetkili", `${req.user.username}#${req.user.discriminator}`)
.addField("Kullanıcı", `${sunucu.members.get(yeniAyar['kick']).user.tag}`)
sunucu.channels.get(client.veritabanı.veri(`${sunucuID}.modlog`)).send({embed:embed})
}
setTimeout(() => {
sunucu.members.get(yeniAyar['kick']).kick()
}, 2000)
  
}

if (yeniAyar['sustur'] && yeniAyar['susturK']) {
  sunucu.channels.get(yeniAyar['susturK']).overwritePermissions(sunucu.members.get(yeniAyar['sustur']), {
    SEND_MESSAGES: false
  });
  client.veritabanı.ayarla(`${sunucuID}.mutes.${yeniAyar['sustur']}`, true)
}
  
if (yeniAyar['susturma'] && yeniAyar['susturmaK']) {
  sunucu.channels.get(yeniAyar['susturmaK']).overwritePermissions(sunucu.members.get(yeniAyar['susturma']), {
    SEND_MESSAGES: null
  });
  client.veritabanı.sil(`${sunucuID}.mutes.${yeniAyar['susturma']}`)
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