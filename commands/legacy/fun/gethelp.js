const { MessageEmbed } = require('discord.js')


module.exports = async (client, message, text) => {
     if (text.toLowerCase().startsWith(`gethelp` || `gh`)) {
          subtext = text.toLowerCase().replace(/gethelp|gh/, '')
          if (subtext === `.advice`) {
               fetch('https://api.adviceslip.com/advice')
                    .catch(err => console.error(err))
                    .then(res => res.json())
                    .then(json => {
                         const advice = json.slip.advice
                         message.reply({
                              embeds: [new MessageEmbed()
                                   .setColor('GREEN')
                                   .setAuthor('Random Advice/Insult')
                                   .setTitle("Here\'s an advice:")
                                   .setFooter('API: https://adviceslip.com/')
                                   .setDescription(advice)
                              ]
                         })
                    })
          } else if (subtext === `.insult`) {
               fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
                    .catch(err => console.error(err))
                    .then(res => res.json())
                    .then(json => {
                         const insult = json.insult
                         message.reply({
                              embeds: [new MessageEmbed()
                                   .setColor('RED')
                                   .setAuthor('Random Advice/Insult')
                                   .setTitle("Here\'s an insult:")
                                   .setFooter('API: https://evilinsult.com/')
                                   .setDescription(insult)
                              ]
                         })
                    })
          }
     }
}