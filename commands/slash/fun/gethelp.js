const { MessageEmbed } = require('discord.js')


module.exports.exec = async (client, interaction) => {
     if (interaction.options.getSubcommand() === "advice") {
          fetch('https://api.adviceslip.com/advice')
               .catch(err => console.error(err))
               .then(res => res.json())
               .then(json => {
                    const advice = json.slip.advice
                    interaction.reply({
                         embeds: [new MessageEmbed()
                              .setColor('GREEN')
                              .setAuthor('Random Advice/Insult')
                              .setTitle("Here\'s an advice:")
                              .setFooter('API: https://adviceslip.com/')
                              .setDescription(advice)
                         ]
                    })
               })
     } else if (interaction.options.getSubcommand() === "insult") {
          fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
               .catch(err => console.error(err))
               .then(res => res.json())
               .then(json => {
                    const insult = json.insult
                    interaction.reply({
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
module.exports.help = {
     name: 'gethelp',
     description: 'Get some help, varying from advices, to insults',
     options: [
          {
               name: "advice",
               description: "Get advice",
               type: "SUB_COMMAND"
          },
          {
               name: "insult",
               description: "Get insult",
               type: "SUB_COMMAND"
          }
     ]
}