const { MessageEmbed } = require("discord.js");


module.exports.exec = async (client, interaction) => {
     var min = interaction.options.getNumber("min")
     var max = interaction.options.getNumber("max")
     var decimal = interaction.options.getNumber("decimal")
     var outcome = `${Math.random() * (max - min) + min}`.split(".")
     if (min !== max) {
          if (decimal) {
               if (decimal > 8) {
                    decimal = 8
               }
               var round = `.${outcome[1].substring(0, decimal)}`
          } else {
               decimal = 0
               var round = ``
          }
          var result = `${outcome[0]}${round}`
     } else {
          var result = min
     }

     interaction.reply({
          embeds: [new MessageEmbed()
               .setColor("BLACK")
               .setAuthor(`🎲 Random Integer/Number`)
               .setTitle(`Result: ${result}`)
               .setDescription(`Minimum Value: **${min}**\nMaximum Value: **${max}**\nRound to Decimal: **${decimal}**`)
          ]
     })
}

module.exports.help = {
     name: "rng",
     description: "Get a random number/integer from range of numbers (Up to 8 decimal places are supported)",
     options: [
          {
               name: "min",
               description: "The minimum value",
               type: "NUMBER",
               required: true

          },
          {
               name: "max",
               description: "The maximum value",
               type: "NUMBER",
               required: true

          },
          {
               name: "decimal",
               description: "The amount of decimal place to be outputted",
               type: "NUMBER",
               required: false

          }
     ]
}