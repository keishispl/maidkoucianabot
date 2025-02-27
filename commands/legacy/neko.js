const { MessageEmbed } = require("discord.js");
const client = require('nekos.life');
const neko = new client();
module.exports = async (client, message, text) => {
     if (text.toLowerCase() === `neko/img`) {
          neko.neko().then((link) =>
               message.reply({
                    embeds: [new MessageEmbed().setColor("FFC0CB").setDescription(`Here's an image of a neko:`).setImage(`${link.url}`).setFooter(`API: nekos.life`)]
               })
          )
          return
     } else if (text.toLowerCase() === `neko/gif`) {
          neko.nekoGif().then((link) =>
               message.reply({
                    embeds: [new MessageEmbed().setColor("FFC0CB").setDescription(`Here's an gif of a neko:`).setImage(`${link.url}`).setFooter(`API: nekos.life`)]
               })
          )
          return
     } else if (text.toLowerCase() === `neko`) {
          if (Math.floor(Math.random() * (2 - 1 + 1) + 1) === 1) {
               neko.neko().then((link) =>
                    message.reply({
                         embeds: [new MessageEmbed().setColor("FFC0CB").setDescription(`Here's an image of a neko:`).setImage(`${link.url}`).setFooter(`API: nekos.life`)]
                    })
               )
          } else {
               neko.nekoGif().then((link) =>
                    message.reply({
                         embeds: [new MessageEmbed().setColor("FFC0CB").setDescription(`Here's an gif of a neko:`).setImage(`${link.url}`).setFooter(`API: nekos.life`)]
                    })
               )
          }
          return
     } else if (text.toLowerCase() === `foxgirl`) {
          neko.foxGirl().then((link) =>
               message.reply({
                    embeds: [new MessageEmbed().setColor("FFC0CB").setDescription(`Here's a fox girl:`).setImage(`${link.url}`).setFooter(`API: nekos.life`)]
               })
          )
          return
     }

     return

}