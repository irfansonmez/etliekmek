const Discord = require('discord.js')
const fs = require('fs')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let prefix = client.ayar.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix

	//const customArgs = args
  //let x = customArgs[1]
  
	if(!args[0]) {
		message.channel.send("<@"+message.author.id+">, Lütfen eklemek istediğiniz kelimeyi yazın.\nÖrnek : **`"+prefix+"filtre-ekle kelime")
		return
	}



	if (client.commands.has(args[0]) || client.aliases.has(args[0])) {
		message.channel.send("<@"+message.author.id+">, Botun var olan bir komutunu engelleyemezsin.")
		return
	}

	var array = []
	var kontrol2 = []
	let filtreler = client.filtres
	var altkomut = ''

	if(filtreler[message.guild.id]) {
		for (var i = 0; i < Object.keys(filtreler[message.guild.id]).length; i++) {
			if(args[0] === Object.keys(filtreler[message.guild.id][i])[0].toString()) {
				array.push(JSON.parse(`{"${Object.keys(filtreler[message.guild.id][i])[0]}"}`))
			} else {
				array.push(JSON.parse(`{"${Object.keys(filtreler[message.guild.id][i])[0]}": "${filtreler[message.guild.id][i][Object.keys(filtreler[message.guild.id][i])]}"}`))
			}
			kontrol2.push(Object.keys(filtreler[message.guild.id][i])[0].toString())
		}
		if(!kontrol2.includes(args[0])) {
			array.push(JSON.parse(`{"${args[0]}"}`))
			filtreler[message.guild.id] = array

			fs.writeFile("./filtre.json", JSON.stringify(filtreler), (err) => {
				console.log(err)
			})

			const embed = new Discord.RichEmbed()
				.setAuthor("Yeni özel komut oluşturuldu!")
			  .setDescription(`Artık \`${prefix}${args[0]}\` yazdığınızda bot **${args[0]}** olarak karşılık verecektir.`)
				.setColor('RANDOM')
			message.channel.send({embed})
			return
		} else {
			filtreler[message.guild.id] = array

			fs.writeFile("./filtre.json", JSON.stringify(filtreler), (err) => {
				console.log(err)
			})

			const embed = new Discord.RichEmbed()
				.setAuthor(`${args[0]} adlı özel komut güncellendi!`)
				.setDescription(`Artık \`${prefix}${args[0]}\` yazdığınızda bot \`${args[0]}\` olarak karşılık verecektir.`)
				.setColor('RANDOM')
			message.channel.send({embed})
			return
		}
	} else {
		array.push(args[0])
		filtreler[message.guild.id] = array

		fs.writeFile("./filtre.json", JSON.stringify(filtreler), (err) => {
			console.log(err)
		})

		const embed = new Discord.RichEmbed()
			.setAuthor("Yeni özel komut oluşturuldu!")
			.setDescription(`Artık \`${prefix}${args[0]}\` yazdığınızda bot \`${args[0]}\` olarak karşılık verecektir.`)
			.setColor('RANDOM')
		message.channel.send({embed})
		return
	}
}

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtreekle2', 'filtre-oluştur2'], 
  permLevel: 4,
  kategori: "özel",
 
}; 

exports.help = { 
  name: 'filtre-ekle2', 
  description: 'Sunucuda bir kelimyei yasaklarsınız.', 
  usage: 'filtre-ekle <kelime>',
  
};