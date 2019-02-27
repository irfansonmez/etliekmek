const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
      
  if(args[0] === 'kullanıcı'){
    
    var request = require('request');
request(`https://simsekapi.cf/tmpuye/${args[1]}`, function (error, response, body) {
    if (error) return message.channel.send('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
      
      let sayfa = [ 
      
      
      
      
      
      ]
      
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(
    }
});
    
  }
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['turckers', 'trucker', 'tmp', 'ets', 'ets2'],
  permLevel: 0,
  kategori: "kullanıcı",
};

exports.help = {
  name: 'truckersmp',
  description: 'Truckersmp trafik, aktif sayısı ve kullanıcı bilgisini verir',
  usage: 'truckersmp',
};
