const Discord = require('discord.js');
const db = require('quick.db');
const fs = require("fs");
module.exports = (client, clientt) => {

client.panel = {};

    client.customCmds = (id, cmd) => {
    
    let komut = cmd['komut']
    let aciklama = cmd['aciklama']
    
    var array = []
	  var kontrol2 = []
    let komutlar = client.cmdd
    
    if(komutlar[id]) {
		for (var i = 0; i < Object.keys(komutlar[id]).length; i++) {
			if(komut === Object.keys(komutlar[id][i])[0].toString()) {
				array.push(JSON.parse(`{"${Object.keys(komutlar[id][i])[0]}": "${aciklama}"}`))
			} else {
				array.push(JSON.parse(`{"${Object.keys(komutlar[id][i])[0]}": "${komutlar[id][i][Object.keys(komutlar[id][i])].replace("\n", "\\n")}"}`))
			}
			kontrol2.push(Object.keys(komutlar[id][i])[0].toString())
		}
		if(!kontrol2.includes(komut)) {
			array.push(JSON.parse(`{"${komut}": "${aciklama}"}`))
			komutlar[id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			return
		} else {
			komutlar[id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			return
		}
	} else {
		array.push(JSON.parse(`{"${komut}": "${aciklama}"}`))
		komutlar[id] = array

		fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
			console.log(err)
		})

		return
	}
    
  };
  
  
client.panel.ayarlarKaydetKullanici = (kullaniciID, kullanici, yeniAyar, req, res) => {
if (yeniAyar['renk']) {
db.set(`${kullanici.id}.renk`, yeniAyar['renk'])
}

if (yeniAyar['resim']) {
db.set(`${kullanici.id}.resim`, yeniAyar['resim'])
}
};
  

    client.writeSettings = (id, newSettings) => {
    
    if (!client.guilds.get(id)) return
    
    try {
      
         if (newSettings['kelimefiltre']) {
        db.push(`filtre_${id}`, newSettings['kelimefiltre'])
           
      }
     } catch (err) {
      //console.error(err)
    };
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
if (!yeniAyar['capslockEngel']) {
db.delete(`capsE_${sunucu.id}`)
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