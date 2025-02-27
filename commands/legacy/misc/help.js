const { MessageEmbed } = require("discord.js");


module.exports = async (client, message, text) => {
     if (text.toLowerCase() === `help`) {
          message.reply({
               embeds: [new MessageEmbed()
                    .setColor("FFC0CB")
                    .setAuthor("Help")
                    .setDescription(`You can read our wiki [here](https://keishispl.github.io/maidkouciana).\nYou can also view our open-source code [here](https://github.com/keishispl/maidkoucianabot).`)
               ]
          })
     }
}