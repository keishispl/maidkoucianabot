const { MessageEmbed } = require("discord.js");


module.exports = async (client, message, text) => {
     if (text.toLowerCase().startsWith(`rng/`)) {
          subtext = text.toLowerCase().replace(/rng\//, '')
          var number = subtext.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|-| /g, "")
          var split = number.split(",")
          if (typeof split[0] !== 'undefined' && typeof split[1] !== 'undefined') {
               var outcome = (Math.random() * (split[1] - split[0]) + split[0]).split(".")
               if (split[0] !== split[1]) {
                    if (typeof split[2] !== 'undefined') {
                         if (split[2] > 8) {
                              split[2] = 8
                         }
                         var round = `.${outcome[1].substring(0, split[2])}`
                    } else {
                         split[2] = 0
                         var round = ``
                    }
                    var result = `${outcome[0]}${round}`
               } else {
                    var result = split[0]
               }

               message.reply({
                    embeds: [new MessageEmbed()
                         .setColor("BLACK")
                         .setAuthor(`🎲 Random Integer/Number`)
                         .setTitle(`Result: ${result}`)
                         .setDescription(`Minimum Value: **${split[0]}**\nMaximum Value: **${split[1]}**\nRound to Decimal: **${split[2]}**`)
                    ]
               })
          }
     }
}