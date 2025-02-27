const { MessageEmbed } = require("discord.js");
const { charKacicode, kacicode } = require("../../functions/kacicode.js");

module.exports.exec = async (client, interaction) => {
     if (interaction.options.getSubcommand() === "translate") {
          subtext = interaction.options.getString("input")
          if (subtext.includes("/" || "?" || "(" || ")")) {
               interaction.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(kacicode(subtext, true))
                         .setDescription(subtext)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          } else {
               interaction.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(kacicode(subtext, false))
                         .setDescription(subtext)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          }
     } else if (interaction.options.getSubcommand() === "charlist") {
          var te = ``
          for (k in charKacicode) {
               te = `${te}\n**${k}** ${charKacicode[k]}`
          }
          te = te.replace("/-", "/")
          te = te.replace("?-", "?")
          te = te.replace("(-", "(")
          te = te.replace(")-", ")")
          alphabet = `**a** (/?)${te.split("**a** (/?)")[1].split("**z** (??//)")[0]}**z** (??//)`
          number = `${te.split("**)** (?/??/?)")[0]}**)** (?/??/?)`
          others = `**,** (??//??)${te.split("**,** (??//??)")[1].split("**!** (?/?/??)")[0]}**!** (?/?/??)\n**SPACE** ,`
          interaction.reply({
               embeds: [new MessageEmbed()
                    .setAuthor('🍵 KaciCode')
                    .setTitle('Character List')
                    .setFooter('Modified Morse Code')
                    .addField(`A - Z`, alphabet, true)
                    .addField(`0 - 9`, number, true)
                    .addField(`Others`, others, true)
               ],
               ephemeral: true
          })
     }
}

module.exports.help = {
     name: "kacicode",
     description: "Modified Morse Code",
     options: [
          {
               name: "translate",
               description: "Translate into KaciCode or to English!",
               type: "SUB_COMMAND",
               options: [
                    {
                         name: "input",
                         description: "Input your text/KaciCode",
                         type: "STRING",
                         required: true
                    }
               ]
          },
          {
               name: "charlist",
               description: "List of characters for KaciCode",
               type: "SUB_COMMAND"
          }
     ]
}