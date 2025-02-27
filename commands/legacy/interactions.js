const { MessageEmbed } = require("discord.js");
const { randomFromList } = require('../functions/randomFromList.js');
const client = require('nekos.life');
const neko = new client();
var textlist = [
     "bite", "cuddle", "highfive", "hug", "kiss", "lick", "pat", "poke", "punch", "squish", "yeet", "slap", "tickle"
]

const declineOffer = function (message, id) {
     if (id === "1083094452790374465") {
          message.reply({
               files: [{ attachment: "commands/variables/decline.png" }]
          })
          return true
     }
     return false
}

module.exports = async (client, message, text) => {
     if (!textlist.includes(`${text.split(" ")[0].toLowerCase()}`)) return;
     const { bite, cuddle, highfive, hug, kiss, lick, pat, poke, punch, squish, yeet } = require('../../commands/variables/links/interact.js')

     let firstMentioned = message.mentions.users.first()
     if (!firstMentioned) {
          message.reply(`You need to mention a user!`)
          return
     }
     if (message.author === firstMentioned) {
          message.reply(`You need to mention a user other than yourself!`)
          return
     }
     if (firstMentioned.bot && firstMentioned.id !== "1083094452790374465") {
          message.reply(`You need to mention a user other than bots!`)
          return
     }

     if (text.toLowerCase().startsWith(`bite`)) {
          if (declineOffer(message, firstMentioned.id)) return;

          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} has bitten ${firstMentioned}!`)
                    .setImage(randomFromList(bite))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`cuddle`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is cuddling ${firstMentioned}.`)
                    .setImage(await neko.cuddle())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
     if (text.toLowerCase().startsWith(`highfive`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is giving ${firstMentioned} a highfive!`)
                    .setImage(randomFromList(highfive))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`hug`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is giving ${firstMentioned} a hug.`)
                    .setImage(await neko.hug())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
     if (text.toLowerCase().startsWith(`kiss`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} kissed ${firstMentioned}`)
                    .setImage(await neko.kiss())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
     if (text.toLowerCase().startsWith(`lick`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is licking ${firstMentioned}.`)
                    .setImage(randomFromList(lick))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`pat`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is giving ${firstMentioned} a pat.`)
                    .setImage(await neko.pat())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
     if (text.toLowerCase().startsWith(`poke`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} has poked ${firstMentioned}!`)
                    .setImage(randomFromList(poke))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`punch`)) {
          if (declineOffer(message, firstMentioned.id)) return;

          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} punched ${firstMentioned}! Ouch.`)
                    .setImage(randomFromList(punch))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`squish`)) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} squished ${firstMentioned}.`)
                    .setImage(randomFromList(squish))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`yeet`)) {
          if (declineOffer(message, firstMentioned.id)) return;

          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} has yeeted ${firstMentioned} to somewhere else.`)
                    .setImage(randomFromList(yeet))
               ]
          })
     }
     if (text.toLowerCase().startsWith(`slap`)) {
          if (declineOffer(message, firstMentioned.id)) return;

          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} slapped ${firstMentioned}!`)
                    .setImage(await neko.slap())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
     if (text.toLowerCase().startsWith(`tickle`)) {
          if (declineOffer(message, firstMentioned.id)) return;

          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setDescription(`${message.author} is tickling ${firstMentioned}.`)
                    .setImage(await neko.tickle())
                    .setFooter(`API: nekos.life`)
               ]
          })
     }
}