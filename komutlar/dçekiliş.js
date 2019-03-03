

const { RichEmbed } = require('discord.js');
const oneLine = require('common-tags').oneLine;
const Discord = require('discord.js')

//const { draw, shhhuffle } = require('/app/Weeb/Utils.js')
const ms = require("ms");

 function shuffle(arr) {
        for (let i = arr.length; i; i--) {
            const j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    }

   function draw(list) {
        const shuffled = shuffle(list);
        return shuffled[Math.floor(Math.random() * shuffled.length)];
    }



module.exports.run = (client, msg, args) => {

let channel = args[0]
let question = args[1]
let copunt = args[2]
let time = args[3]



     let embed = new Discord.RichEmbed()
     .setTitle(`${question} çekilişi başladı!`)
     .setDescription('Çekiliş başladı! Katılmak için 🎉 tepkisine basın!\nBitmesine '+time+' kadar zaman var.')
     .setColor('RANDOM')
     .setTimestamp();
     channel.send(embed).then(message => {
         message.react('🎉').then( r => { 
           setTimeout(function(){
            if(message.reactions.get('🎉').count <= 2) {
              let embed2 = new Discord.RichEmbed()
     .setTitle(question)
     .setDescription('Çekiliş sona erdi! Yeteri kadar katılımcı bulunamadı.')
     .setColor('RANDOM')
     .setTimestamp();
              message.edit(embed2);
            } else {
              var winners = [];
               const users = message.reactions.get("🎉").users;
            const list = users.array().filter(u => u.id !== msg.author.id);
             // let winner = list[Math.floor(Math.random() * list.length)];
                 for (let i = 0; i < copunt; i++) {
                  const x = draw(list);

                if (!winners.includes(x)) winners.push(x);
            }

               let embed3 = new Discord.RichEmbed()
              .setTitle(question)
              .setDescription(`Kazanan(lar): ${winners.filter(u => u !== undefined && u !== null).map(u => u.toString()).join(", ")}`)
              .setFooter('Çekiliş sona erdi.')
              .setColor('RANDOM')
              //.setFooter(`${copunt} Winner(s)`)
              .setTimestamp();
              message.edit(embed3)
            }
        }, ms(time));
         })
     })
   }

   module.exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  module.exports.help = {
    name: "deçekiliş",
    description: "",
    usage: ""
  };