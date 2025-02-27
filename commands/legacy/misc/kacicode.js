const { MessageEmbed } = require("discord.js");
const { charKacicode, kacicode } = require("../../functions/kacicode.js");

module.exports = async (client, message, text) => {
     if (text.toLowerCase().startsWith("kacicode/" || "kc/")) {
          subtext = text.toLowerCase().replace(/kc\/|kacicode\//, '')
          if (subtext.includes("/" || "?" || "(" || ")")) {
               message.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(kacicode(subtext, true))
                         .setDescription(subtext)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          } else {
               message.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(kacicode(subtext, false))
                         .setDescription(subtext)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          }
     } else if (text.toLowerCase() === `kc.charlist`) {
          var te = ``
          for (k in charKacicode) {
               te = `${te}\n**${k}** ${charKacicode[k]}`
          }
          te = te.replace("/-", "/")
          te = te.replace("?-", "?")
          te = te.replace("(-", "(")
          te = te.replace(")-", ")")
          message.reply({
               content: 'Character List has been sent to your DMs!'
          })
          alphabet = `**a** (/?)${te.split("**a** (/?)")[1].split("**z** (??//)")[0]}**z** (??//)`
          number = `${te.split("**)** (?/??/?)")[0]}**)** (?/??/?)`
          others = `**,** (??//??)${te.split("**,** (??//??)")[1].split("**!** (?/?/??)")[0]}**!** (?/?/??)\n**SPACE** ,`
          message.author.send({
               embeds: [new MessageEmbed()
                    .setAuthor('🍵 KaciCode')
                    .setTitle('Character List')
                    .setFooter('Modified Morse Code')
                    .addField(`A - Z`, alphabet, true)
                    .addField(`0 - 9`, number, true)
                    .addField(`Others`, others, true)
               ]
          })
     }
}