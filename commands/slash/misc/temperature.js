const { MessageEmbed } = require("discord.js");


module.exports.exec = async (client, interaction) => {
     var temperatureFormat = interaction.options.getString("type")
     var temperatureNumber = interaction.options.getNumber("temperature")

     if (temperatureFormat === "Celcius") {
          var temperatureInCelsius = temperatureNumber
          var temperatureInFarenheit = temperatureNumber * 32
          var temperatureInKelvin = temperatureNumber * 273.15
     } else if (temperatureFormat === "Farenheit") {
          var temperatureInCelsius = temperatureNumber / 32
          var temperatureInFarenheit = temperatureNumber
          var temperatureInKelvin = temperatureNumber * 255.928
     } else if (temperatureFormat === "Kelvin") {
          var temperatureInCelsius = temperatureNumber / 273.15
          var temperatureInFarenheit = temperatureNumber / 255.928
          var temperatureInKelvin = temperatureNumber
     } else {
          interaction.reply({
               content: `An unknown error has occurred while doing calculations.`
          })
          console.log(`ERROR in Temperature -> Number: ${temperatureNumber} | Type: ${temperatureFormat}`)
          return
     }

     interaction.reply({
          embeds: [new MessageEmbed()
               .setColor("BLACK")
               .setAuthor(`🌡️ Calculate Temperature`)
               .setTitle(`Your Input: ${temperatureNumber} ${temperatureFormat}`)
               .setDescription(`Celsius: **${temperatureInCelsius}°C**\nFarenheit: **${temperatureInFarenheit}°F**\nKelvin: **${temperatureInKelvin}K**`)
          ]
     })
}

module.exports.help = {
     name: "temperature",
     description: "Convert temperature",
     options: [
          {
               name: "temperature",
               description: "The number",
               type: "NUMBER",
               required: true,
          },
          {
               name: "type",
               description: "What is it? Celcius, Farenheit, or Kelvin?",
               type: "STRING",
               required: true,
               choices: [
                    { name: 'Celcius', value: 'Celcius' },
                    { name: 'Farenheit', value: 'Farenheit' },
                    { name: 'Kelvin', value: 'Kelvin' }
               ]

          }
     ]
}
