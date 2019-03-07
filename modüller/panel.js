const url = require("url");
const path = require("path");

const Discord = require("discord.js");

var express = require('express');
var app = express();

const passport = require("passport");
const session = require("express-session");
const LevelStore = require("level-session-store")(session);
const Strategy = require("passport-discord").Strategy;

const helmet = require("helmet");

const md = require("marked");

module.exports = (client) => {
  
  const bilgiler = {
    oauthSecret: "lQRQ4QWq0VXuzlFyaTSidt5qr1xc2H8X",
    callbackURL: "https://seed-satin.glitch.me/callback",
    domain: "https://seed-satin.glitch.me/"
  };
  
  console.log('BAŞARILI')
  
  const dataDir = path.resolve(`${process.cwd()}${path.sep}panel`);

  const templateDir = path.resolve(`${dataDir}${path.sep}html${path.sep}`);

  app.use("/css", express.static(path.resolve(`${dataDir}${path.sep}css`)));
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new Strategy({
    clientID: client.user.id,
    clientSecret: bilgiler.oauthSecret,
    callbackURL: bilgiler.callbackURL,
    scope: ["identify", "guilds" , "email"]
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));

  app.use(session({
    secret: 'ceyhun12',
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());

  app.locals.domain = bilgiler.domain;
  
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

  var bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  })); 
  
  function girisGerekli(req, res, next) {
    if (req.isAuthenticated()) return next();
    req.session.backURL = req.url;
    res.redirect("/login");
  }
  
  const yukle = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      user: req.isAuthenticated() ? req.user : null
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
  };
  
  let dil = ""
  
  app.get("/", (req, res) => {
    yukle(res, req, "index.ejs")
  });
  
  app.post("/", (req, res) => {
    dil = req.body["d"]
    if (!dil || dil === undefined || dil === null) return res.json({"hata/error":"Dil seçmeden giremezsin!/You can't go without language!"})
    res.redirect("/"+dil)
  });

  app.get("/tr/giris", (req, res, next) => {
    if (req.session.backURL) {
      req.session.backURL = req.session.backURL;
    } else if (req.headers.referer) {
      const parsed = url.parse(req.headers.referer);
      if (parsed.hostname === app.locals.domain) {
        req.session.backURL = parsed.path;
      }
    } else {
      req.session.backURL = "/tr";
    }
    next();
  },
  passport.authenticate("discord"));

  app.get("/en/login", (req, res, next) => {
    if (req.session.backURL) {
      req.session.backURL = req.session.backURL;
    } else if (req.headers.referer) {
      const parsed = url.parse(req.headers.referer);
      if (parsed.hostname === app.locals.domain) {
        req.session.backURL = parsed.path;
      }
    } else {
      req.session.backURL = "/en";
    }
    next();
  },
  passport.authenticate("discord"));
  
  app.get("/autherror", (req, res) => {
    res.json({"hata":"Bir hata sonucunda Discord'da bağlanamadım! Lütfen tekrar deneyiniz."})
  });
  
  app.get("/callback", passport.authenticate("discord", { failureRedirect: "/autherror" }), async (req, res) => {
    if (client.ayarlar.sahip.includes(req.user.id)) {
      req.session.isAdmin = true;
    } else {
      req.session.isAdmin = false;
    }
    if (req.session.backURL) {
      const url = req.session.backURL;
      req.session.backURL = null;
      res.redirect(url);
    } else {
      res.redirect(`/${!dil?"en":"tr"}/${dil==="tr"?"panel":"dashboard"}`);
    }
  });
  

  app.get("/tr/cikis", function(req, res) {
    req.session.destroy(() => {
      req.logout();
      res.redirect("/tr");
    });
  });
  
  app.get("/en/logout", function(req, res) {
    res.session.destroy(() => {
      req.logout();
      res.redirect("/en");
    });
  });

  app.get("/tr", (req, res) => {
    yukle(res, req, "tr/index.ejs");
  });
  
  app.get("/tr/komutlar", (req, res) => {
    yukle(res, req, "tr/komutlar.ejs");
  });
  
  app.get("/tr/istatistikler", (req, res) => {
    var istatistik = {
      sunucu: client.guilds.size+" sunucu",
      kanal: client.channels.size+" kanal",
      kullanıcı: client.users.size+" kullanıcı"
    };
    yukle(res, req, "tr/istatistikler.ejs", {istatistik});
  });
  
  app.get("/tr/kullaniciler", (req, res) => {
    yukle(res, req, "tr/kullanıcılar.ejs");
  });
  
  app.get("/tr/kullaniciler/:kullaniciID", (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    yukle(res, req, "tr/kullanıcı.ejs", {kullanici});
  });
  
  app.get("/tr/kullaniciler/:kullaniciID/yonet", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    if (req.user.id !== req.params.kullaniciID) return res.json({"hata":"Başkasının kullanıcı ayarlarına dokunamazsın."});
    yukle(res, req, "tr/k-panel.ejs", {kullanici});
  });
  
  app.post("/tr/kullaniciler/:kullaniciID/yonet", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    if (req.user.id !== req.params.kullaniciID) return res.json({"hata":"Başkasının kullanıcı ayarlarına dokunamazsın."});
    client.panel.ayarlarKaydetKullanici(kullanici.id, kullanici, req.body, req, res);
    res.redirect(`/tr/kullaniciler/${req.params.kullaniciID}/yonet`);
  });
  
  app.get("/tr/kullaniciler/:kullaniciID/yonet/:ayarID/sifirla", girisGerekli, (req, res) => {
    if (client.veritabanı.varMı(`${req.params.kullaniciID}.${req.params.ayarID}`) ===  false || req.params.ayarID === "resim" && client.veritabanı.veri(`${req.params.kullaniciID}.${req.params.ayarID}`) === "https://img.revabot.tk/99kd63vy.png") return res.json({"hata":req.params.ayarID.charAt(0).toUpperCase()+req.params.ayarID.slice(1)+" ayarı "+client.users.get(req.params.kullaniciID).tag+" adlı kullanıcıda ayarlı olmadığı için sıfırlanamaz."});
    client.veritabanı.sil(`${req.params.kullaniciID}.${req.params.ayarID}`)
    res.redirect(`/tr/kullaniciler/${req.params.kullaniciID}/yonet`);
  });
  
  app.get("/tr/sunucular", (req, res) => {
    yukle(res, req, "tr/sunucular.ejs"); //sunucu bilgi gösterme sistemi xd
  });
  
  app.get("/tr/sunucular/:sunucuID", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "tr/sunucu.ejs", {sunucu});
  });
  
  app.get("/tr/sunucular/:sunucuID/uyeler", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "tr/üyeler.ejs", {sunucu});
  });
  
  app.get("/tr/sunucular/:sunucuID/roller", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "tr/roller.ejs", {sunucu});
  });
  
  app.get("/tr/sunucular/:sunucuID/kanallar", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "tr/kanallar.ejs", {sunucu});
  });
  
  app.get("/tr/panel", girisGerekli, (req, res) => {
    const perms = Discord.Permissions;
    yukle(res, req, "tr/panel.ejs", {perms});
  });
  
  app.get("/tr/panel/:sunucuID", girisGerekli, (req, res) => {
    res.redirect(`/tr/panel/${req.params.sunucuID}/yonet`);
  });

  app.get("/tr/panel/:sunucuID/yonet", girisGerekli, (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = sunucu && !!sunucu.member(req.user.id) ? sunucu.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "tr/ayarlar.ejs", {sunucu});
  });
  
  app.post("/tr/panel/:sunucuID/yonet", girisGerekli, (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = sunucu && !!sunucu.member(req.user.id) ? sunucu.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    
    if (req.body['komut'] && req.body['aciklama']) {
      if (client.kayıt.komutlar.has(req.body['komut']) === true || client.kayıt.alternatifler.has(req.body['komut'])) return res.json({"hata":"Botun zaten var olan bir komutu özel komut olarak eklenemez."});
      if (client.veritabanı.varMı(`${sunucu.id}.özelKomutlar`) === true) {
        for (var i = 0; i < client.veritabanı.veri(`${sunucu.id}.özelKomutlar`).length; i++) {
          if (Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0] === req.body['komut']) return res.json({"hata":"Sunucuda "+req.body['komut']+" adlı bir özel komut zaten bulunduğu için tekrar eklenemez."});
        }  
      }
    }
    if (req.body['ban']) {
      if (sunucu.members.get(client.user.id).permissions.has("BAN_MEMBERS") === false) return res.json({"hata":"Botun "+sunucu.name+" adlı sunucuda Üyeleri Yasakla (BAN_MEMBERS) izni olmadığı için "+client.users.get(req.body['ban']).tag+" adlı üye yasaklanamıyor."});
    }
    if (req.body['unban']) {
      require('request')({
        url: `https://discordapp.com/api/v7/users/${req.body['unban']}`,
        headers: {
          "Authorization": `Bot ${client.token}`
        }
      }, async function(error, response, body) {
        if (JSON.parse(body).message && JSON.parse(body).message === "Invalid Form Body") return res.json({"hata":"Discord'da "+req.body['unban']+" ID adresine sahip bir kullanıcı bulunmuyor."});
        let bans = await sunucu.fetchBans();
        if (bans.has(req.body['unban']) === false) return res.json({"hata":sunucu.name+" sunucusunda "+JSON.parse(body).username+"#"+JSON.parse(body).discriminator+" adlı kullanıcı yasaklı olmadığı için yasağını kaldıramam."});
        res.redirect(`/tr/panel/${req.params.sunucuID}/yonet`);
      });
      return
    }
    if (req.body['kick']) {
      if (sunucu.members.get(client.user.id).permissions.has("KICK_MEMBERS") === false) return res.json({"hata":"Botun "+sunucu.name+" adlı sunucuda Üyeleri At (KICK_MEMBERS) izni olmadığı için "+client.users.get(req.body['kick']).tag+" adlı üye atılamıyor."}); 
    }
    
    client.panel.ayarlarKaydet(sunucu.id, sunucu, req.body, req, res);
    res.redirect(`/tr/panel/${req.params.sunucuID}/yonet`);
  });
  
  app.get("/tr/panel/:sunucuID/yonet/:ayarID/sifirla", girisGerekli, (req, res) => {
    if (client.veritabanı.varMı(`${req.params.sunucuID}.${req.params.ayarID}`) === false) return res.json({"hata":req.params.ayarID.charAt(0).toUpperCase()+req.params.ayarID.slice(1)+" adlı ayar "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.veritabanı.sil(`${req.params.sunucuID}.${req.params.ayarID}`)
    res.redirect(`/tr/panel/${req.params.sunucuID}/yonet`);
  });
  
  app.get("/tr/panel/:sunucuID/yonet/ozelKomutlar/:komutID/:aciklamaID/:tipID/sifirla", girisGerekli, (req, res) => {
    client.veritabanı.çıkar(`${req.params.sunucuID}.özelKomutlar`, JSON.parse(`{"${req.params.komutID}":"${req.params.aciklamaID}", "tip":"${req.params.tipID}"}`))
    res.redirect(`/tr/panel/${req.params.sunucuID}/yonet`);
  });
  
  app.get("/tr/panel/:sunucuID/yonet/ozelKomutlar/:komutID/:aciklamaID/:tipID/:renkID/sifirla", girisGerekli, (req, res) => {
    client.veritabanı.çıkar(`${req.params.sunucuID}.özelKomutlar`, JSON.parse(`{"${req.params.komutID}":"${req.params.aciklamaID}", "tip":"${req.params.tipID}", "renk":"#${req.params.renkID}"}`))
    res.redirect(`/tr/panel/${req.params.sunucuID}/yonet`);
  });
  
  app.get("/tr/yonetici", girisGerekli, (req, res) => {
    yukle(res, req, "tr/yönetici.ejs");
  });
  
  app.get("/tr/botuekle", (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
  });
  
  app.get("/tr/sunucular/:sunucuID/botuat", girisGerekli, (req, res) => {
    client.guilds.get(req.params.sunucuID).leave();
    res.redirect("/tr/sunucular");
  });
  
  app.get("/en/guilds/:sunucuID/leavebot", girisGerekli, (req, res) => {
    client.guilds.get(req.params.sunucuID).leave();
    res.redirect("/en/guilds");
  });
 
  //İngilizce Bölümler
  
    app.get("/en", (req, res) => {
    yukle(res, req, "en/index.ejs");
  });
  
  app.get("/en/commands", (req, res) => {
    yukle(res, req, "en/commands.ejs");
  });
  
  app.get("/en/statistics", (req, res) => {
    var istatistik = {
      sunucu: client.guilds.size+" guild",
      kanal: client.channels.size+" channel",
      kullanıcı: client.users.size+" user"
    };
    yukle(res, req, "en/statistics.ejs", {istatistik});
  });
  
  app.get("/en/users", (req, res) => {
    yukle(res, req, "en/users.ejs");
  });
  
  app.get("/en/users/:kullaniciID", (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    yukle(res, req, "en/user.ejs", {kullanici});
  });
  
  app.get("/en/users/:kullaniciID/manage", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    if (req.user.id !== req.params.kullaniciID) return res.json({"hata":"Başkasının kullanıcı ayarlarına dokunamazsın."});
    yukle(res, req, "en/u-dashboard.ejs", {kullanici});
  });
  
  app.post("/en/users/:kullaniciID/manage", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    if (req.user.id !== req.params.kullaniciID) return res.json({"hata":"Başkasının kullanıcı ayarlarına dokunamazsın."});
    client.panel.ayarlarKaydetKullanici(kullanici.id, kullanici, req.body, req, res);
    res.redirect(`/en/users/${req.params.kullaniciID}/manage`);
  });
  
  app.get("/en/users/:kullaniciID/manage/:ayarID/delete", girisGerekli, (req, res) => {
    if (client.veritabanı.varMı(`${req.params.kullaniciID}.${req.params.ayarID}`) ===  false || req.params.ayarID === "resim" && client.veritabanı.veri(`${req.params.kullaniciID}.${req.params.ayarID}`) === "https://img.revabot.tk/99kd63vy.png") return res.json({"hata":req.params.ayarID.charAt(0).toUpperCase()+req.params.ayarID.slice(1)+" ayarı "+client.users.get(req.params.kullaniciID).tag+" adlı kullanıcıda ayarlı olmadığı için sıfırlanamaz."});
    client.veritabanı.sil(`${req.params.kullaniciID}.${req.params.ayarID}`)
    res.redirect(`/en/users/${req.params.kullaniciID}/manage`);
  });
  
  app.get("/en/guilds", (req, res) => {
    yukle(res, req, "en/guilds.ejs"); //sunucu bilgi gösterme sistemi xd
  });
  
  app.get("/en/guilds/:sunucuID", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "en/guild.ejs", {sunucu});
  });
  
  app.get("/en/guilds/:sunucuID/members", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "en/members.ejs", {sunucu});
  });
  
  app.get("/en/guilds/:sunucuID/roles", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "en/roles.ejs", {sunucu});
  });
  
  app.get("/en/guilds/:sunucuID/channels", (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    yukle(res, req, "en/channels.ejs", {sunucu});
  });
  
  app.get("/en/dashboard", girisGerekli, (req, res) => {
    const perms = Discord.Permissions;
    yukle(res, req, "en/dashboard.ejs", {perms});
  });
  
  app.get("/en/dashboard/:sunucuID", girisGerekli, (req, res) => {
    res.redirect(`/en/dashboard/${req.params.sunucuID}/manage`);
  });

  app.get("/en/dashboard/:sunucuID/manage", girisGerekli, (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = sunucu && !!sunucu.member(req.user.id) ? sunucu.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "en/settings.ejs", {sunucu});
  });
  
  app.post("/en/dashboard/:sunucuID/manage", girisGerekli, (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = sunucu && !!sunucu.member(req.user.id) ? sunucu.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    
    if (req.body['komut'] && req.body['aciklama']) {
      if (client.kayıt.komutlar.has(req.body['komut']) === true || client.kayıt.alternatifler.has(req.body['komut'])) return res.json({"hata":"Botun zaten var olan bir komutu özel komut olarak eklenemez."});
      if (client.veritabanı.varMı(`${sunucu.id}.özelKomutlar`) === true) {
        for (var i = 0; i < client.veritabanı.veri(`${sunucu.id}.özelKomutlar`).length; i++) {
          if (Object.keys(client.veritabanı.veri(`${sunucu.id}.özelKomutlar`)[i])[0] === req.body['komut']) return res.json({"hata":"Sunucuda "+req.body['komut']+" adlı bir özel komut zaten bulunduğu için tekrar eklenemez."});
        }  
      }
    }
    if (req.body['ban']) {
      if (sunucu.members.get(client.user.id).permissions.has("BAN_MEMBERS") === false) return res.json({"hata":"Botun "+sunucu.name+" adlı sunucuda Üyeleri Yasakla (BAN_MEMBERS) izni olmadığı için "+client.users.get(req.body['ban']).tag+" adlı üye yasaklanamıyor."});
    }
    if (req.body['unban']) {
      require('request')({
        url: `https://discordapp.com/api/v7/users/${req.body['unban']}`,
        headers: {
          "Authorization": `Bot ${client.token}`
        }
      }, async function(error, response, body) {
        if (JSON.parse(body).message && JSON.parse(body).message === "Invalid Form Body") return res.json({"hata":"Discord'da "+req.body['unban']+" ID adresine sahip bir kullanıcı bulunmuyor."});
        let bans = await sunucu.fetchBans();
        if (bans.has(req.body['unban']) === false) return res.json({"hata":sunucu.name+" sunucusunda "+JSON.parse(body).username+"#"+JSON.parse(body).discriminator+" adlı kullanıcı yasaklı olmadığı için yasağını kaldıramam."});
        res.redirect(`/en/dashboard/${req.params.sunucuID}/manage`);
      });
      return
    }
    if (req.body['kick']) {
      if (sunucu.members.get(client.user.id).permissions.has("KICK_MEMBERS") === false) return res.json({"hata":"Botun "+sunucu.name+" adlı sunucuda Üyeleri At (KICK_MEMBERS) izni olmadığı için "+client.users.get(req.body['kick']).tag+" adlı üye atılamıyor."}); 
    }
    
    client.panel.ayarlarKaydet(sunucu.id, sunucu, req.body, req, res);
    res.redirect(`/en/dashboard/${req.params.sunucuID}/manage`);
  });
  
  app.get("/en/dashboard/:sunucuID/manage/:ayarID/delete", girisGerekli, (req, res) => {
    if (client.veritabanı.varMı(`${req.params.sunucuID}.${req.params.ayarID}`) === false) return res.json({"hata":req.params.ayarID.charAt(0).toUpperCase()+req.params.ayarID.slice(1)+" adlı ayar "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.veritabanı.sil(`${req.params.sunucuID}.${req.params.ayarID}`)
    res.redirect(`/en/dashboard/${req.params.sunucuID}/manage`);
  });
  
  app.get("/en/dashboard/:sunucuID/manage/customCommands/:komutID/:aciklamaID/:tipID/delete", girisGerekli, (req, res) => {
    client.veritabanı.çıkar(`${req.params.sunucuID}.özelKomutlar`, JSON.parse(`{"${req.params.komutID}":"${req.params.aciklamaID}", "tip":"${req.params.tipID}"}`))
    res.redirect(`/en/dashboard/${req.params.sunucuID}/manage`);
  });
  
  app.get("/en/dashboard/:sunucuID/manage/customCommands/:komutID/:aciklamaID/:tipID/:renkID/delete", girisGerekli, (req, res) => {
    client.veritabanı.çıkar(`${req.params.sunucuID}.özelKomutlar`, JSON.parse(`{"${req.params.komutID}":"${req.params.aciklamaID}", "tip":"${req.params.tipID}", "renk":"#${req.params.renkID}"}`))
    res.redirect(`/en/dashboard/${req.params.sunucuID}/manage`);
  });
  
  app.get("/en/admin", girisGerekli, (req, res) => {
    yukle(res, req, "en/admin.ejs");
  });
  
  app.get("/en/invitebot", (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
  });
  
  app.listen(process.env.PORT);
};