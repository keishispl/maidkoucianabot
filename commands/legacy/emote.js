const { MessageEmbed } = require("discord.js");
const { randomFromList } = require('../functions/randomFromList.js');
const client = require('nekos.life');
const neko = new client();

module.exports = async (client, message, text) => {
     const { angry, pout, awkward, blush, cry, dance, eat, smile } = require('../variables/links/emote.js')

     if (text.toLowerCase() === `angry`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is angry! >:(`)
                    .setImage(randomFromList(angry))
               ]
          })
     }
     if (text.toLowerCase() === `pout`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is pouting!`)
                    .setImage(randomFromList(pout))
               ]
          })
     }
     if (text.toLowerCase() === `awkward`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is.. uhh..`)
                    .setImage(randomFromList(awkward))
               ]
          })
     }
     if (text.toLowerCase() === `blush`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is bushing! >///<`)
                    .setImage(randomFromList(blush))
               ]
          })
     }
     if (text.toLowerCase() === `cry`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is crying! :(`)
                    .setImage(randomFromList(cry))
               ]
          })
     }
     if (text.toLowerCase() === `dance`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is dancin'!`)
                    .setImage(randomFromList(dance))
               ]
          })
     }
     if (text.toLowerCase() === `eat`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is eating! :P`)
                    .setImage(randomFromList(eat))
               ]
          })
     }
     if (text.toLowerCase() === `smile`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is happy! :)`)
                    .setImage(randomFromList(smile))
               ]
          })
     }
     if (text.toLowerCase() === `smug`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`There's a smug look on ${message.author}'s face..'`)
                    .setImage(await neko.smug())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
}