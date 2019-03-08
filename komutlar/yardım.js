const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args, dil) => {

  let x = args[0]

  let yana = await bot.emojis.get(bot.emojiler.yan);

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || bot.ayarlar.prefix;


  try {
    
    if (!x) {
      let bilgi = [`${bot.user.username} | Yardım Komudu 

${yana} **${prefix}yardım moderasyon** > Moderasyon komutlarını listeler.
${yana} **${prefix}yardım ayarlar** > Ayar komutlarını listeler.
${yana} **${prefix}yardım sunucu** > Sunucu komutlarını listeler.
${yana} **${prefix}yardım kullanıcı** > Kullanıcı komutlarını listeler.
${yana} **${prefix}yardım eğlence** > Eğlence komutlarını listeler.
${yana} **${prefix}yardım oyun** > Oyun komutlarını listeler.
${yana} **${prefix}yardım profil** > Profil, seviye ve para sistemi komutlarını listeler.
${yana} **${prefix}yardım müzik** > Müzik komutlarını listeler.
${yana} **${prefix}yardım efekt** > Efekt komutlarını listeler.
${yana} **${prefix}yardım premium** > Ücretsiz premium komutlarını listeler.
${yana} **${prefix}yardım bot** > ${bot.user.username} komutlarını listeler.
${yana} **${prefix}yardım sahip** > Bot sahibinin komutlarını listeler.

      
${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      const anaY = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(bot.user.avatarURL)
      .setDescription(bilgi)
    message.channel.send(anaY)

       

      return
    }
    
    if (x === 'müzik' || x === 'şarkı') {


      let müzik = [`**${bot.user.username} | Müzik komutları**

${yana} **${prefix}oynat**: İstenilen şarkıyı oynatır. 
${yana} **${prefix}tekrar**: Çalan şarkıyı bittiği zaman tekrar oynatır. 
${yana} **${prefix}durdur**: Çalan şarkıyı durdurur. 
${yana} **${prefix}duraklat**: Çalan şarkıyı duraklatır. 
${yana} **${prefix}devamet**: Duraklatılmış şarkıyı devam ettirir. 
${yana} **${prefix}ses**: Şarkının sesini ayarlar. 
${yana} **${prefix}geç**: Sıradaki şarkıya geçer. 
${yana} **${prefix}kuyruk**: Şarkı kuyruğunu ve çalan şarkıyı gösterir.  
            
${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];
      
            const müzikE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(müzik)
          message.channel.send(müzikE)
        
      return
    }


  if(x === 'moderasyon' || x === 'mod' || x === 'yetkili' || x === 'özel-komut' || x === 'özelkomut' ) {
 
  
      
let mod = [`**${bot.user.username} | Moderasyon komutları**

${yana} **${prefix}yasakla**: İstediğiniz kişiyi sunucudan yasaklar. 
${yana} **${prefix}at**: İstediğiniz kişiyi sunucudan atar. 
${yana} **${prefix}konuştur**: Susturulmuş bir kişinin susturmasını kaldırmayı sağlar. 
${yana} **${prefix}mod-log-ayarla**: Moderasyon kayıtları kanalını ayarlar. 
${yana} **${prefix}reklam-taraması**: Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar. 
${yana} **${prefix}yavaş-mod**: Bulunduğunuz kanala yazma sınırı (süresi) ekler. 
${yana} **${prefix}sustur-rol-ayarla**: Birisi susturulunca verilecek rolü ayarlar. 
${yana} **${prefix}sustur**: İstediğiniz kişiyi susturur. 
${yana} **${prefix}temizle-üye**: Belirtilen kişinin belirtilen miktarda mesajını siler. 
${yana} **${prefix}temizle**: Belirtilen miktarda mesaj siler. 
${yana} **${prefix}uyar**: İstediğiniz kişiyi uyarır. 
${yana} **${prefix}uyarı-kaldır**: İstediğiniz kişinin uyarılarını kaldırır. 
${yana} **${prefix}uyarılar**: İstediğiniz kişinin uyarılarını gösterir.
${yana} **${prefix}emojiyükle**: Sunucuza emoji yüklemenizi sağlar.
${yana} **${prefix}sunucu-kur**: Bot sizin yerinize sunucunuzun kanallarını ve rolleri açar.

**${bot.user.username} Özel Komut Sistemi**
 
${yana} **${prefix}özel-komut ekle**: Sunucunuza ait özel komut oluşturursunuz.
${yana} **${prefix}özel-komut sil**: Sunucunuza ait özel komut silmenizi sağlar.
${yana} **${prefix}özel-komut bilgi**: İstediğiniz özel komut hakkında bilgi almanızı sağlar

    
${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];
      
            const modE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(mod)
          message.channel.send(modE)
    


    return
  }


  if(x === 'kullanıcı' || x === 'üye') {

let kullanıcı = [`**${bot.user.username} | Kullanıcı komutları**

${yana} **${prefix}afk**: AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.) 
${yana} **${prefix}atatürk**: Atatürk'ün rastgele bir resmini atar. 
${yana} **${prefix}avatar**: Avatarınızı gösterir. 
${yana} **${prefix}havadurumu**: Yazılan konumun hava durumu bilgisini gösterir. 
${yana} **${prefix}hesapla**: Belirtilen işlemi yapar. 
${yana} **${prefix}kitap-ara**: Yazılan kitabın bilgisini gösterir. 
${yana} **${prefix}kullanıcı-bilgi**: İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir. 
${yana} **${prefix}romen**: Yazdığınız sayının romen karşılığını yazar. 
${yana} **${prefix}snipe**: Kanalda son silinen mesajı gösterir 
${yana} **${prefix}sunucu**: Bulunduğun sunucu hakkında bilgi verir. 
${yana} **${prefix}söz**: Rastgele güzel sözler atar. 
${yana} **${prefix}yetkilerim**: Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir. 
${yana} **${prefix}çevir**: İstediğiniz yazıyı istediğiniz dile çevirir.
${yana} **${prefix}truckersmp**: Truckers mp komutlarını gösterir.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];


const kullanıcıE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(kullanıcı)
          message.channel.send(kullanıcıE)


    return
  }


  if(x === 'eğlence') {

    let eğlence = [`**${bot.user.username} | Eğlence komutları**

${yana} **${prefix}ascii**: Yazdığınız yazıyı ascii şekline çevirir. 
${yana} **${prefix}aşk-ölçer**: İki kullanıcı arasındaki aşkı ölçer. 
${yana} **${prefix}csgo**: Girilen oyuncunun csgo istatistiklerini gösterir. 
${yana} **${prefix}dans**: Yazdığınız yazıyı dans:tada: ascii şekline çevirir. 
${yana} **${prefix}düello**: İstediğiniz bir kişi eğlenceli ve zorlu bir kapışma yaparsınız! 
${yana} **${prefix}mesaj**: IDini verdiğiniz mesaj hakkında bilgi verir. (IDi verilen mesaj komutun kullanıldığı kanalda yok ise mesajı bulamaz.) 
${yana} **${prefix}pokemon**: Belirtilen Pokemon hakkında bilgi verir. 
${yana} **${prefix}sor**: Yapay zeka ile sorularınıza cevap verir. 
${yana} **${prefix}yazdır**: İstediğiniz yazıyı bota webhook ile etiketlenen kullanıcının ağzından yazdırır.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const eğlenceE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(eğlence)
          message.channel.send(eğlenceE)


    return
  }


  if(x === 'sunucu') {

    let sunucu = [`**${bot.user.username} | Sunucu komutları**

${yana} **${prefix}ayarlar**: Sunucu ayarlarını gösterir. 
${yana} **${prefix}davet-sıralaması**: Sunucunuza en çok kullanıcı getirenleri sıralar. 
${yana} **${prefix}emojiler**: Bulunduğunuz sunucudaki emojileri gösterir. 
${yana} **${prefix}oylama**: Sunucunuzda oylama yapmanızı sağlar. 
${yana} **${prefix}roller**: Bulunduğunuz sunucudaki rolleri gösterir.
${yana} **${prefix}premium**: Premium hakkında bilgi verir. (Ücretsiz) 
${yana} **${prefix}yetkililer**: Bulunduğunuz sunucudaki yetkilileri çevrimiçi, çevrımdışı/görünmez, rahatsız etmeyin ve boşta modlarında olup olmadıklarını göstererek listeler.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const sunucuE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(sunucu)
          message.channel.send(sunucuE)


    return
  }


  if(x === 'sahip') {

    let sahip = [`**${bot.user.username} | Bot sahibi komutları**

${yana} **${prefix}beyazliste**: Belirtilen kullancıyı kara listeden çıkartır! 
${yana} **${prefix}eval**: Yazılan kodu çalıştırır. 
${yana} **${prefix}karaliste**: Belirtilen kullancıyı kara listeye alır! 
${yana} **${prefix}load**: Yeni eklenen bir komutu bot yeniden başlamaya gerek kalmadan yükler. 
${yana} **${prefix}admin-altın-yolla**: İstediğiniz kişiye altın yollayabilirsiniz. 
${yana} **${prefix}admin-elmas-yolla**: İstediğiniz kişiye elmas yollayabilirsiniz. 
${yana} **${prefix}admin-para-yolla**: İstediğiniz kişiye para yollayabilirsiniz. 
${yana} **${prefix}reboot**: Botu yeniden başlatır. 
${yana} **${prefix}reload**: Belirtilen bir komutu yeniden başlatır. 
${yana} **${prefix}speedtest**: speedtest 
${yana} **${prefix}unload**: Belirtilen bir komutu devre dışı bırakır.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const sahipE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(sahip)
          message.channel.send(sahipE)


    return
  }




  if(x === 'efekt') {

    let efekt = [`**${bot.user.username} | Efekt komutları**

${yana} **${prefix}bulanık**: Avatarınızı bulanıklaştırıp gösterir. 
${yana} **${prefix}hsbalance**: Avatarınıza HypeSquad Balance efekti verir. 
${yana} **${prefix}hsbravery**: Avatarınıza HypeSquad bravery efekti verir. 
${yana} **${prefix}hsbrilliance**: Avatarınıza HypeSquad brilliance efekti verir. 
${yana} **${prefix}dcbughunter**: Avatarınıza bug hunter efekti verir.
${yana} **${prefix}dcevent**: Avatarınıza event efekti verir. 
${yana} **${prefix}dcnitro**: Avatarınıza nitro efekti verir. 
${yana} **${prefix}dcpartner**: Avatarınıza partner efekti verir. 
${yana} **${prefix}dcstaff**: Avatarınıza staff efekti verir. 
${yana} **${prefix}dctrinity**: Avatarınıza trinity efekti verir. 
${yana} **${prefix}pixel**: Avatarınızı pixelleştirir. 
${yana} **${prefix}triggered**: Avatarınıza Triggered efekti verir. 
${yana} **${prefix}wasted**: Avatarınıza Wasted efekti verir. 
${yana} **${prefix}zıt-renk**: Avatarınızın rengini tersine çevirir.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const efektE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(efekt)
          message.channel.send(efektE)


    return
  }

  if(x === 'bot') {

    let efekt = [`**${bot.user.username} | Bot komutları**

${yana} **${prefix}davet**: Botun davet linklerini gösterir. 
${yana} **${prefix}istatistik**: Botun istatistiklerini gösterir. 
${yana} **${prefix}yardım**: Botun komutlarını listeler
${yana} **${prefix}ping**: Botun gecikme süresini gösterir. 
${yana} **${prefix}hata-bildir**: Bottaki bir hatayı bildirmenizi sağlar. 
${yana} **${prefix}tavsiye**: Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.
${yana} **${prefix}top10**: Botun bulunduğu sunuculardan en çok kişiye sahip olan 10 sunucuyu sıralar. 
  
${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const efektE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(efekt)
          message.channel.send(efektE)


    return
  }
 
 
  


  if(x === 'ayarlar' || x === 'ayar') {

    let ayar = [`**${bot.user.username} | Ayar komutları**

${yana} **${prefix}filtre-ekle**: Sunucunuza kelime filtresi eklemenizi sağlar
${yana} **${prefix}filtre-sil**: Sunucunuzda eklediğiniz bir filtreyi silmenize yarar
${yana} **${prefix}filtre-liste**: Sunucunuza eklenmiş kelime filtrelerini gösterir
${yana} **${prefix}davet-kanal-ayarla**: Davet kanalını ayarlar. 
${yana} **${prefix}destek-kanal-ayarla**: Gelişmiş Destek Sistemindeki destek kanalını değiştirmenizi sağlar. 
${yana} **${prefix}destek-rol-ayarla**: Gelişmiş Destek Sistemindeki destek ekibi rolünü değiştirmenizi sağlar. 
${yana} **${prefix}giriş-mesaj-ayarla**: Giriş mesajını değiştirmenizi sağlar. 
${yana} **${prefix}giriş-çıkış-ayarla**: Giriş çıkış kanalını ayarlar. 
${yana} **${prefix}çıkış-mesaj-ayarla**: Çıkış mesajını değiştirmenizi sağlar. 
${yana} **${prefix}küfür-engelle**: Küfür engelleme sistemini açıp kapatmanızı sağlar. 
${yana} **${prefix}link-engelle**: Lİnk engelleme sistemini açıp kapatmanızı sağlar. 
${yana} **${prefix}sayaç-ayarla**: Sayacı ayarlar. 
${yana} **${prefix}sayaç-kanal-ayarla**: Sayaç kanalını ayarlar. 
${yana} **${prefix}log-ayarla**: Sunucu kayıtları kanalını ayarlar. 
${yana} **${prefix}oto-rol-ayarla**: Sunucuya birisi katıldıgında verilecek rolü ayarlar. 
${yana} **${prefix}tag-ayarla**: Sunucuya katılan üyeye otomatik tag verir 
${yana} **${prefix}ön-ek**: Botun ön ekini sunucuya özel olarak değiştirir.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const ayarE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(ayar)
          message.channel.send(ayarE)


    return
  }

    
  


  if(x === 'oyun') {

    let oyun = [`**${bot.user.username} | Oyun komutları**

${yana} **${prefix}fortnite**: İstediğiniz bir fortnite kullanıcısının istatistiklerini gösterir.
${yana} **${prefix}kazıkazan**: Kazı kazan oynarsınız ve rastgele para çıkarırsınız. 
${yana} **${prefix}oyun-ara**: Verilen oyun hakkında bilgi verir. 
${yana} **${prefix}slot**: Slot makinesi ile oynarsınız. Kazanırsanız rastgele para kazanır, kaybederseniz rastgele para kaybedersiniz.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const oyunE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(oyun)
          message.channel.send(oyunE)


    return
  }



  if(x === 'profil' || x === 'para' || x === 'para-komutları' || x === 'profil-komutları' ||x === 'seviye' || x === 'seviye-komutları') {

    let profil = [`
**${bot.user.username} | Para komutları**

${yana} **${prefix}altın-yolla**: İstediğiniz kişiye altın yollayabilirsiniz. 
${yana} **${prefix}altınal**: Paranızla altın alıp marketten eşya satın alabilirsiniz. 
${yana} **${prefix}elmasal**: Altınınızla elmas alıp marketten eşya satın alabilirsiniz. 
${yana} **${prefix}elmas-yolla**: İstediğiniz kişiye elmas yollayabilirsiniz. 
${yana} **${prefix}paralarım**: Olan paranızı, altınlarınızı ve elmaslarınızı gösterir 
${yana} **${prefix}günlük**: Günlük maaşınızı verir. 
${yana} **${prefix}market**: eşya satın alabilirsiniz gösterir. 
${yana} **${prefix}meslek**: Meslek sahibi olarak daha hızlı para kazanabilirsiniz 
${yana} **${prefix}para-yolla**: İstediğiniz kişiye para yollayabilirsiniz. 

**${bot.user.username} | Profil komutları**

${yana} **${prefix}profil**: Profil kartınızı gösterir.
${yana} **${prefix}isim**: İsminizi ayarlarsınız.
${yana} **${prefix}biyografi**: Biyografi mesajınızı ayarlar.
${yana} **${prefix}rozetler**: Aldığınız rozetleri gösterir.

**${bot.user.username} | Seviye komutları**

${yana} **${prefix}seviye**: Seviye kartınızı gösterir.
${yana} **${prefix}seviye renk**: Seviye kartınızdaki renkleri değiştirir.
${yana} **${prefix}seviye resim**: Seviye kartınızın resmini değişir.

${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const profilE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(profil)
          message.channel.send(profilE)


    return
  }


  
  if(x === 'premium') {

    let pre = [`**${bot.user.username} | Premium komutları (ücretsiz)**

${yana} **${prefix}toplu-rol-al**: İstediğiniz rolü sunucudaki herkesten alır. 
${yana} **${prefix}toplu-rol-ver**: İstediğiniz rolü sunucudaki herkese verir.
    
${yana} Premium olmayı bilmiyorsanız **${prefix}premium** yazarak öğrenebilirsiniz.
${yana} Eğer beni sunucuna eklemek istersen **${prefix}davet** yazabilirsin.`];

      

    const preE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .setDescription(pre)
          message.channel.send(preE)


    return
  }



    } catch(err) {
      
    }

    
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını listeler',
  usage: 'yardım'
};
