const { MessageEmbed } = require('discord.js')


module.exports.exec = async (client, interaction) => {
  let memory = `${process.memoryUsage().heapUsed / 1024 / 1024}`
  memory = memory.split(".")[0]

  const latency = Date.now() - interaction.createdTimestamp
  const apilatency = Math.round(client.ws.ping)

  if (latency > 99) {
    latency2 = "Awful"
    color = "RED"
  } else if (latency > 39) {
    latency2 = "Bad"
    color = "YELLOW"
  } else if (latency > 19) {
    latency2 = "Good"
    color = "GREEN"
  } else if (latency > -1) {
    latency2 = "Fantastic"
    color = "GREEN"
  } else if (latency < 0) {
    latency2 = "Broken"
    color = "BLACK"
  }
  if (apilatency > 99) {
    apilatency2 = "Awful"
  } else if (apilatency > 39) {
    apilatency2 = "Bad"
  } else if (apilatency > 19) {
    apilatency2 = "Good"
  } else if (apilatency > -1) {
    apilatency2 = "Fantastic"
  } else if (apilatency < 0) {
    apilatency2 = "Broken"
  }

  interaction.reply({
    embeds: [new MessageEmbed()
      .setColor(`${color}`)
      .setAuthor("⌛️ Information & Status")
      .setTitle("Pong!")
      .setDescription(`Client Ping: **${latency}ms** \`(${latency2})\`\nDiscord API Ping: **${apilatency}ms** \`(${apilatency2})\`\nMemory Usage: **${memory} MB** / *600 MB*`)
    ]
  })
}

module.exports.help = {
  name: "ping",
  description: "Pong!"
}