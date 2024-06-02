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


module.exports = async (client, message, text) => {
     if (text.toLowerCase().startsWith("kacicode/" || "kc/")) {
          subtext = text.toLowerCase().replace(/kc\/|kacicode\//, '')
          if (subtext.includes("/" || "?" || "(" || ")")) {
               var before = subtext
               let k = ''
               for (k in ref) {
                    for (var i = 0; i < subtext.length; i++) {
                         subtext = subtext.replace(`${k}`, `${ref[k]}`)
                    }
               }
               subtext = subtext.replace("kc", "")
               message.reply({
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
               message.reply({
                    embeds: [new MessageEmbed()
                         .setTitle(subtext)
                         .setDescription(before)
                         .setAuthor('🍵 KaciCode')
                         .setFooter('Modified Morse Code')
                    ]
               })
          }
     } else if (text.toLowerCase() === `kc.charlist`) {
          var te = ``
          for (k in reref) {
               te = `${te}\n**${k}** ${reref[k]}`
          }
          te = te.replace("/-", "/")
          te = te.replace("?-", "?")
          te = te.replace("(-", "(")
          te = te.replace(")-", ")")
          message.reply({
               content: 'Character List has been sent to your DMs!'
          })
          charAlphabet = `**a** (/?)${te.split("**a** (/?)")[1].split("**z** (??//)")[0]}**z** (??//)`
          charNumber = `${te.split("**)** (?/??/?)")[0]}**)** (?/??/?)`
          charOthers = `**,** (??//??)${te.split("**,** (??//??)")[1].split("**!** (?/?/??)")[0]}**!** (?/?/??)\n**SPACE** ,`
          message.author.send({
               embeds: [new MessageEmbed()
                    .setAuthor('🍵 KaciCode')
                    .setTitle('Character List')
                    .setFooter('Modified Morse Code')
                    .addField(`A - Z`, charAlphabet, true)
                    .addField(`0 - 9`, charNumber, true)
                    .addField(`Others`, charOthers, true)
               ]
          })
     }
}