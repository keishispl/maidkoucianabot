const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports = async (client, message, text) => {
  if (text.toLowerCase() === `rps`) {
    const row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId("rock")
        .setEmoji("🪨")
        .setStyle("SUCCESS")
      )
      .addComponents(new MessageButton()
        .setCustomId("paper")
        .setEmoji("📄")
        .setStyle("SUCCESS")
      )
      .addComponents(new MessageButton()
        .setCustomId("scissors")
        .setEmoji("✂️")
        .setStyle("SUCCESS")
      )
      .addComponents(new MessageButton()
        .setCustomId("cancel")
        .setLabel("Cancel")
        .setStyle("SECONDARY")
      )
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(`BLACK`)
        .setAuthor("🧱📄✂️ Rock Paper Scissors")
        .setTitle("Waiting for your turn..")
        .setDescription(`Press a button below!`)
      ],
      components: [row]
    }).then(function (msg) {
      const filter = i => {
        i.deferUpdate()
        return i.user.id === message.author.id
      }
      const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', filter, time: 15000 });
      collector.on('collect', i => {
        if (i.customId === 'cancel') {
          msg.edit({
            embeds: [new MessageEmbed()
              .setColor(`BLACK`)
              .setAuthor("🧱📄✂️ Rock Paper Scissors")
              .setTitle("Cancelled Game")
              .setDescription(`The game has been cancelled`)
            ],
            components: []
          })
        } else {
          const rps = [
            'rock',
            'paper',
            'scissors'
          ]
          var botrps = rps[Math.floor(Math.random() * 3)]
          const type = i.customId
          if (botrps === type) {
            var result = `It's a tie!`
            var color = "YELLOW"
          } else if (botrps === 'paper' & type === 'rock') {
            var result = `You've lost!`
            var color = "RED"
          } else if (botrps === 'rock' & type === 'scissors') {
            var result = `You've lost!`
            var color = "RED"
          } else if (botrps === 'scissors' & type === 'paper') {
            var result = `You've lost!`
            var color = "RED"
          } else if (botrps === 'rock' & type === 'paper') {
            var result = `You've won!`
            var color = "GREEN"
          } else if (botrps === 'scissors' & type === 'rock') {
            var result = `You've won!`
            var color = "GREEN"
          } else if (botrps === 'paper' & type === 'scissors') {
            var result = `You've won!`
            var color = "GREEN"
          }

          msg.edit({
            embeds: [new MessageEmbed()
              .setColor(color)
              .setAuthor("🧱📄✂️ Rock Paper Scissors")
              .setTitle(result)
              .setDescription(`You chose **${type}**\nMaidKouciana chose **${botrps}**`)
            ],
            components: []
          })

        }
      })

    })
  }
}