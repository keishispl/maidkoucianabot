const { MessageEmbed } = require("discord.js");
var ref = {
     '(/?)': 'a',
     '(?///)': 'b',
     '(?/?/)': 'c',
     '(?//)': 'd',
     '(/)': 'e',
     '(//?/)': 'f',
     '(??/)': 'g',
     '(////)': 'h',
     '(//)': 'i',
     '(/???)': 'j',
     '(?/?)': 'k',
     '(/?//)': 'l',
     '(??)': 'm',
     '(?/)': 'n',
     '(???)': 'o',
     '(/??/)': 'p',
     '(??/?)': 'q',
     '(/?/)': 'r',
     '(///)': 's',
     '(?)': 't',
     '(//?)': 'u',
     '(///?)': 'v',
     '(/??)': 'w',
     '(?//?)': 'x',
     '(?/??)': 'y',
     '(??//)': 'z',

     '(/????)': '1',
     '(//???)': '2',
     '(///??)': '3',
     '(////?)': '4',
     '(/////)': '5',
     '(?////)': '6',
     '(??///)': '7',
     '(???//)': '8',
     '(????/)': '9',
     '(?????)': '0',

     ',': ' ',

     '(??//??)': ',',
     '(???///)': ':',
     '(?////?)': '-',
     '(/?//?/)': '"',
     '(?///?)': '=',
     '(/?/?/?)': '.',
     '(?/?/?/)': ';',
     '(/????/)': "'",
     '(//??/?)': '_',
     '(/?/?/)': '+',
     '(/??/?/)': '@',
     '(?/?/??)': '!',

     '(?//?/)': '/',
     '(//??//)': '?',
     '(?/??/)': '(',
     '(?/??/?)': ')',
}
var reref = {
     '/-': '(?//?/)',
     '?-': '(//??//)',
     '(-': '(?/??/)',
     ')-': '(?/??/?)',

     'a': '(/?)',
     'b': '(?///)',
     'c': '(?/?/)',
     'd': '(?//)',
     'e': '(/)',
     'f': '(//?/)',
     'g': '(??/)',
     'h': '(////)',
     'i': '(//)',
     'j': '(/???)',
     'k': '(?/?)',
     'l': '(/?//)',
     'm': '(??)',
     'n': '(?/)',
     'o': '(???)',
     'p': '(/??/)',
     'q': '(??/?)',
     'r': '(/?/)',
     's': '(///)',
     't': '(?)',
     'u': '(//?)',
     'v': '(///?)',
     'w': '(/??)',
     'x': '(?//?)',
     'y': '(?/??)',
     'z': '(??//)',

     '1': '(/????)',
     '2': '(//???)',
     '3': '(///??)',
     '4': '(////?)',
     '5': '(/////)',
     '6': '(?////)',
     '7': '(??///)',
     '8': '(???//)',
     '9': '(????/)',
     '0': '(?????)',

     ',': '(??//??)',
     ':': '(???///)',
     '-': '(?////?)',
     '"': '(/?//?/)',
     '=': '(?///?)',
     '.': '(/?/?/?)',
     ';': '(?/?/?/)',
     "'": '(/????/)',
     '_': '(//??/?)',
     '+': '(/?/?/)',
     '@': '(/??/?/)',
     '!': '(?/?/??)',

     ' ': ',',
}
module.exports.exec = async (client, interaction) => {
     if (interaction.options.getSubcommand() === "translate") {
          subtext = interaction.options.getString("input")
          if (subtext.includes("/" || "?" || "(" || ")")) {
               var before = subtext
               let k = ''
               for (k in ref) {
                    for (var i = 0; i < subtext.length; i++) {
                         subtext = subtext.replace(`${k}`, `${ref[k]}`)
                    }
               }
               subtext = subtext.replace("kc", "")
               interaction.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(subtext)
                         .setDescription(before)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          } else {
               var before = subtext
               subtext = subtext.replace("/", "/-")
               subtext = subtext.replace("?", "?-")
               subtext = subtext.replace("(", "(-")
               subtext = subtext.replace(")", ")-")
               let k = ''
               for (k in reref) {
                    for (var i = 0; i < subtext.length; i++) {
                         subtext = subtext.replace(`${k}`, `${reref[k]}`)
                    }
               }
               subtext = subtext.replace("(?/?)(?/?/)", "")
               interaction.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(subtext)
                         .setDescription(before)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          }
     } else if (interaction.options.getSubcommand() === "charlist") {
          var te = ``
          for (k in reref) {
               te = `${te}\n**${k}** ${reref[k]}`
          }
          te = te.replace("/-", "/")
          te = te.replace("?-", "?")
          te = te.replace("(-", "(")
          te = te.replace(")-", ")")
          charAlphabet = `**a** (/?)${te.split("**a** (/?)")[1].split("**z** (??//)")[0]}**z** (??//)`
          charNumber = `${te.split("**)** (?/??/?)")[0]}**)** (?/??/?)`
          charOthers = `**,** (??//??)${te.split("**,** (??//??)")[1].split("**!** (?/?/??)")[0]}**!** (?/?/??)\n**SPACE** ,`
          interaction.reply({
               embeds: [new MessageEmbed()
                    .setAuthor('🍵 KaciCode')
                    .setTitle('Character List')
                    .setFooter('Modified Morse Code')
                    .addField(`A - Z`, charAlphabet, true)
                    .addField(`0 - 9`, charNumber, true)
                    .addField(`Others`, charOthers, true)
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