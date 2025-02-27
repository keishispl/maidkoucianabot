const { MessageEmbed } = require("discord.js");


module.exports = async (client, message, text) => {
     if (text.toLowerCase().startsWith(`temp/` || `temperature/`)) {
          subtext = text.toLowerCase().replace(/temp\/|temperature\//, '')
          message.reply({ content: `Calculating...` }).then((botMessage) =>
               setTimeout(() => {
                    var temperatureFormat = subtext.replace(/[0-9]|\.|a|b|d|e|g|h|i|j|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|-/g, "")
                    var temperatureNumber = subtext.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g, "")

                    let containsLetters = temperatureFormat.includes("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z")
                    if (containsLetters) {
                         botMessage.edit('Cannot find temperature scale type for: ' + temperatureFormat)
                         return
                    }
                    let containsHyphen = temperatureNumber.replace(/-/, "")
                    containsHyphen = containsHyphen.includes("-")
                    if (containsHyphen) {
                         botMessage.edit({ content: `Cannot find what a hyphen does. Why did you put a hypen in it anyways?` })
                         return
                    }

                    var temperatureFormat = temperatureFormat['0']
                    if (temperatureFormat === "c") {
                         var temperatureFormat = "Celcius"
                    } else if (temperatureFormat === "f") {
                         var temperatureFormat = "Farenheit"
                    } else if (temperatureFormat === "k") {
                         var temperatureFormat = "Kelvin"
                    }


                    if (temperatureFormat === "Celcius") {
                         var temperatureInCelsius = temperatureNumber
                         var temperatureInFarenheit = temperatureNumber * 2 - ((10 / 100) * temperatureNumber) + 32
                         var temperatureInKelvin = temperatureNumber + 273.15
                    } else if (temperatureFormat === "Farenheit") {
                         var temperatureInCelsius = (temperatureNumber - 32 + ((10 / 100) / temperatureNumber)) / 2
                         var temperatureInFarenheit = temperatureNumber
                         var temperatureInKelvin = (temperatureNumber - 32 + ((10 / 100) / temperatureNumber)) / 2 + 273.15
                    } else if (temperatureFormat === "Kelvin") {
                         var temperatureInCelsius = temperatureNumber - 273.15
                         var temperatureInFarenheit = (temperatureNumber - 273.15) * 2 - ((10 / 100) * (temperatureNumber - 273.15)) + 32
                         var temperatureInKelvin = temperatureNumber
                    } else {
                         botMessage.edit({
                              content: `An unknown error has occurred while doing calculations.`
                         })
                         console.log(`ERROR in Temperature -> Number: ${temperatureNumber} | Type: ${temperatureFormat}`)
                         return
                    }

                    botMessage.edit({
                         content: "Calculated!",
                         embeds: [new MessageEmbed()
                              .setColor("BLACK")
                              .setAuthor(`🌡️ Calculate Temperature`)
                              .setTitle(`Your Input: ${temperatureNumber} ${temperatureFormat}`)
                              .setDescription(`Celsius: **${temperatureInCelsius}°C**\nFarenheit: **${temperatureInFarenheit}°F**\nKelvin: **${temperatureInKelvin}K**`)
                         ]
                    })
               }, 1250))
     }
}