const { MessageEmbed } = require("discord.js");
const { eightball } = require("../../functions/eightballOutcome.js")
var { times } = require("../../storage/eightball.json")
var fs = require('fs')


module.exports.exec = async (client, interaction) => {
  if (interaction.options.getSubcommand() === "ratio") {
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
    interaction.reply({
      embeds: [new MessageEmbed()
        .setAuthor(`🎱 Ratio`)
        .setTitle(`#${times}`)
        .setColor(color)
        .setDescription(`**${status}**`)
      ]
    })
  } else if (interaction.options.getSubcommand() === "ask") {
    times += 1
    var table = {
      times: times
    }
    json = JSON.stringify(table)
    fs.writeFile(__dirname + '/../../storage/eightball.json', json, 'utf8', function (err) { if (err) throw err })

    var question = interaction.options.getString("question")
    interaction.reply({
      embeds: [new MessageEmbed()
        .setAuthor(`🎱 Eightball`)
        .setTitle(`#${times}`)
        .setColor("BLACK")
        .setDescription(`**${question}**\n${eightball()}`)
      ]
    })
  }
}

module.exports.help = {
  name: "eightball",
  description: "Ask the eightball!",
  options: [
    {
      name: "ratio",
      description: "Ratio",
      type: "SUB_COMMAND",
    },
    {
      name: "ask",
      description: "Ask the eightball something",
      type: "SUB_COMMAND",
      options: [
        {
          name: "question",
          description: "The question that you are asking",
          type: "STRING",
          required: true,
        }
      ]
    }
  ]
}
