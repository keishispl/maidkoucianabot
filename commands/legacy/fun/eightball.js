const { MessageEmbed } = require("discord.js");
var { times } = require("../../storage/eightball.json")
var fs = require('fs')


module.exports = async (client, message, text) => {
  if (text.toLowerCase().startsWith(`8b` || `8ball` || `eightball`)) {
    subtext = text.toLowerCase().replace(/8b|8ball|eightball/, '')
    if (subtext === `.ratio`) {
      times += 1
      var table = {
        times: times
      }
      json = JSON.stringify(table)
      fs.writeFile(__dirname + '/../../storage/eightball.json', json, 'utf8', function (err) { if (err) throw err })

      let ratioChances = [0, 1, 2]
      let ratioResult = ratioChances[Math.floor(Math.random() * 3)]
      if (ratioResult === 0) {
        var color = "GREEN"
        var status = "Ratio Confirmed"
      } else if (ratioResult === 1) {
        var color = "YELLOW"
        var status = "Ratio Unsure"
      } else if (ratioResult === 2) {
        var color = "RED"
        var status = "Ratio Declined"
      }
      message.reply({
        embeds: [new MessageEmbed()
          .setAuthor(`🎱 Ratio`)
          .setTitle(`#${times}`)
          .setColor(color)
          .setDescription(`**${status}**`)
        ]
      })
    } else if (subtext.startsWith("/")) {
      times += 1
      var table = {
        times: times
      }
      json = JSON.stringify(table)
      fs.writeFile(__dirname + '/../../storage/eightball.json', json, 'utf8', function (err) { if (err) throw err })

      let eightballOutcome = [
        "Ehh.. I'm not sure",
        "What did you say again?",
        "I'm 69% sure",
        "Yeah, probably",
        "Try asking again",
        "Unfortunately, no",
        "Unfortunately, yes",
        "Surely not",
        "Who knows?",
        "Possibly not",
        "Your question was dumb, ask again",
        "Unfortunately, not a single living being in this infinite universe has a proper answer to a question like that",
        "I must disagree"
      ]
      let eightballResult = eightballOutcome[Math.floor(Math.random() * eightballOutcome.length)]
      var question = subtext.replace("/", '')
      message.reply({
        embeds: [new MessageEmbed()
          .setAuthor(`🎱 Eightball`)
          .setTitle(`#${times}`)
          .setColor("BLACK")
          .setDescription(`**${question}**\n${eightballResult}`)
        ]
      })
    }
  }
}