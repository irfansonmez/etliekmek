const Discord = require('discord.js');
const Jimp = require('jimp');


exports.run = async (bot, message, args) => {
var user = message.author;  
if (!message.guild) return message.reply(`Bu komutu sunucularda kullanabilirsin.`);
              
  const db = require('quick.db');
const filter = m => m.author.id === message.author.id;

let hakV = await db.fetch(`şifreH_${message.guild.id}_${message.author.id}`);

var hak = ''

if(hakV == 1) { var hak = `3` }
if(hakV == 2) { var hak = 2 }
if(hakV == 3) { var hak = 1 }
if(hakV == 4) { var hak = 'hAKKINIZ BİTTİĞİ İÇİN KOMUT İPTAL EDİLDİ.' }


   var s = [
"(XQ2iAHq",
"]4sk3.,[",
"@h13q/?y",
"*3A;ZN/[",
"(w6+3me",
"[AzUs!vx",
"[969oK&!",
"/jx]Wvae",
"?taKx0rS",
"7b1H0+y",
"!c4e[Q*w",
"=iCMp9_-",
"[KrqjC6]",
"]PfL5-#[",
"-xG8E\&2",
"\qmVgzic",
")xKKLF@L",
"[d1DBnhj",
"]Cvb90E0",
":A1sG_%9",
"#sOW*Xgh",
"#8WXjfVf",
"=XJ6znz=",
"_FrvMM@7",
")ca58PTa",
"(MY;e?/.",
"'53wSHGQ",
";ZkBm#(7",
"_Y6BVRp3",
"&LnyTO16",
"@2ZY6edQ",
"'ML4X%*,",
"/8Mnv$mP",
"(2uagC/N",
".XcLLsre",
"-K6Vp9Qi",
"#HYsi;3e",
";PzP@M%r",
"_CzW:viy",
"@sOyV[(U",
",WXNzvRw",
")g6ZcT+W",
"]zwb8T2n",
"&k7Q1Oa@",
"@QOaqP-4",,
"%Pe!VB]h",
"]6G7(XH3",
"@5E&MJ=5",
"@4T6O&*k",
"_jXcUM!J",
"*YnUyK7K?c",
"=c4/a7c5tsk",
"@zVmCy7vo\z",
"[vbG&[-NUNZ",
":8L44!6jOVD",
"(oO@SK97NX4",
";tSM3F8oT7y",
"]vxmZW27F9h",
"uoOHs[hT,_",
";Jh-FK2E$:&",
"+B7gnjyR*CA",
"%6b3q4P8+4/",
"=H7aL7//*O9",
"&bBHzh,T:TE",
"#Pwa2J6Am&7",
"-fo(AoCHxYg",
"/Uh51GbhSL#",
".YX_djcWjy5",
"+O7kmkJv0BS",
"/wZoBEa4)=*",
"\HRX330ydXo",
"+TB=uSYHUJC",
"=LbJ1o]f\X9",
"&vSUSZ*F*8=",
"*jpsKF0a4/w",
"%8jgVzrBdk=",
",oJ\vfNLHYU",
".3muP_YV.Hd",
".WHi\HAg0-j",
";Ys#BmGvLz%",
";Lc.90Z[@nu",
"(VvP4xJKJEe",
";OC0Px,mv4=",
"&GfY4s!!/qY",
"*qgmZZM5g6",
"]1zuFNeD0@B",
"=co3654EC:[",
"]4bMAsNVwMK",
"=2BO9DHUW;k",
"+ovcHh)2\s)",
"5LEqZoempd",
".0RjbBtf6N8",
"#00522KE[V-",
":1iHc@Yz_0P",
"=zK9CCe/jBV",
 "+oSwgXZ['ZD",
"@Fxn00'sSM-",
"(MkdxD@d8+D",
"!AeyVH2Lwsi",
")cAJr91FO:t ", 
     
"Jo]GYR(]2NZ",
"hnJ,3=TuZYN",
"XN.zei(J#E5",
"qH?fbShFgaS",
":9uEyZ,faB/5",
"=kPcV4=mR2g6",
"/KEXd3qmbjYa",
"-Bn6G#rAi=P6",
":wK@uoRQp%\o",
"$AOEE5[fcFpE",
"\LDqmNXAoo:Z",
"$yPhh]MG!POj",
"*LU:VkJ7Tsrq",
"#muD3)*emgJi",
":1YSPCTv-diL",
"6rMFA3qDjBw",
"=LRDK:9_g0Cj",
"+r4sN4v7qbNB",
"!sELM@)8=,67",
".NnanzmQf'Zc",
")ichthrz&:P3",
"!iRS1]SY8cz7",
"&7XKh0nxJ'!B",
"!xxA6T1z\O$4",
")yp7hG;3hvr1",
";Qne1cqQeJTQ",
":tceWgWGZTmi",
"$fsQG;Qr$=/e",
":VYDG[(oc)!f",
"/OgzCvuM!S13",
"\FE4PaWYKEv9",
"@7ZHY$4q)-)b",
"[1sr80&Z$6BC",
",znH+V$K+-fZ",
"]CNq$o2zv-!A",
"'oF0$%sH7[,K",
"!GFu-U-K_6S;",
")AfPQuCvFb2:",
"$GAYPoOiK;Ou",
"=TYuF';GzNSu",
"*aVyn4BmsA'w",
")Tot8qnzbaiE",
".C6wYfi19g8f",
"+oxaEQ(/krvY",
"(J1zA6i%h1w8",
")NPd/pSz?UPZ",
"]RasSz?$EQgc",
"#GNN+2Ddq%A*",
"[Agbcoer8sm4",
"(hpRyTV(-G%R",
     
];
  

  
  var sifre = s[Math.floor((Math.random() * s.length))];

const embed = new Discord.RichEmbed()

  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription(`Kayıt olmak için **${sifre}** bu kodu doğru bir şekilde yazınız 3 deneme hakkınız vardır.`)
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 3 yanlış cevap verirseniz veya 2 dakika içinde iptal edilecektir.')
message.author.send(embed)
.then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 200000
  }).then(async (collected) => {
   if (collected.first().content === 'iptal') return message.reply("Başarıyla iptal edildi!")
  
  let neblm = collected.first().content

  if(neblm = sifre) {
    message.author.send(`Şifreyi doğru girdiniz, rolünüz verilmiştir.`)
  }
 // db.add(`şifreH_${message.guild.id}_${message.author.id}`, 1)
 




})
})
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: ""
};

exports.help = {
  name: 'kayıtol',
  description: '.',
  usage: ''
};