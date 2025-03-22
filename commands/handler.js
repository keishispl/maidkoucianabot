const fs = require("fs");
const express = require("express");
const { Client, Collection, MessageEmbed } = require("discord.js");
const app = express();
const { colorText, seperateText } = require("./colorText.js");

module.exports = async (client, legacy) => {
  console.log(colorText("Waking up from my sleep.. >.<", "aqua"))


  // Function Commands
  console.log(seperateText())
  console.log(colorText("Functions.. :>", "yellow"))
  const functionFiles = fs
    .readdirSync(`./commands/functions`)
    .filter((file) => file.endsWith('.js'));
  for (const file of functionFiles) {
    const command = require(`./functions/${file}`);
    console.log(colorText("->", "red") + ` ${file.split(".")[0]}`)
  }
  const functionFilesFolder = fs
    .readdirSync('./commands/functions')
    .filter((file) => !file.includes('.'));
  for (const folder of functionFilesFolder) {
    const functionFiles = fs
      .readdirSync(`./commands/functions/${folder}`)
      .filter((file) => file.endsWith('.js'));
    console.log('')
    console.log(colorText("|", "red") + ` ${folder}`)
    for (const file of functionFiles) {
      const command = require(`./functions/${folder}/${file}`);
      console.log(colorText("|->", "red") + ` ${file.split(".")[0]}`)
    }
  }
  console.log(colorText("Yay it loaded! :D", "green"))

  // Slash Commands
  client.commands = new Collection();
  const db = require('quick.db')

  // No Folder Slash Commands
  console.log(seperateText())
  console.log(`\x1b[33mSlash commands.. :>\x1b[0m`)
  const outerCommandFiles = fs
    .readdirSync(`./commands/slash`)
    .filter((file) => file.endsWith('.js'));
  for (const file of outerCommandFiles) {
    const command = require(`./slash/${file}`);
    const slashName = file.split(".")[0];
    client.commands.set(command.help.name, { ...command.help, ...{ exec: command.exec } })
    console.log(colorText("->", "red") + ` ${slashName}`)
  }

  // Foldered Slash Commands
  const commandFolders = fs.readdirSync('./commands/slash').filter((file) => !file.includes('.'));
  for (const folder of commandFolders) {
    const commandFiles = fs
      .readdirSync(`./commands/slash/${folder}`)
      .filter((file) => file.endsWith('.js'));
    console.log('')
    console.log(colorText("|", "red") + ` ${folder}`)
    for (const file of commandFiles) {
      const command = require(`./slash/${folder}/${file}`);
      const slashName = file.split(".")[0];
      client.commands.set(command.help.name, { ...command.help, ...{ exec: command.exec } })
      console.log(colorText("|->", "red") + ` ${slashName}`)
    }
  }
  console.log(colorText("Yay it loaded! :D", "green"))

  // Register Slash Commands
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
      const cmd = client.commands.get(interaction.commandName);
      if (cmd) {
        try {
          cmd.exec(client, interaction);
        } catch (err) {
          console.log(`[ERROR] ${interaction.commandName} | command:\n${err}`);
        }
      }
    }
  })

  client.on('guildCreate', async (guild) => {
    guild.commands.set(
      client.commands.map((cmd) => ({
        name: cmd.name,
        description: cmd.description,
        options: cmd.options,
      }))
    )
  })

  client.on("ready", async () => {
    client.guilds.cache.forEach(guildz => {
      guildz.commands.set(
        client.commands.map((cmd) => ({
          name: cmd.name,
          description: cmd.description,
          options: cmd.options,
        }))
      );
    })
  })

  // Legacy Commands
  console.log(seperateText())
  console.log(`\x1b[33mLegacy commands.. :>\x1b[0m`)
  const legacyFiles = fs
    .readdirSync(`./commands/legacy`)
    .filter((file) => file.endsWith('.js'));
  for (const file of legacyFiles) {
    const command = require(`./legacy/${file}`);
    console.log(colorText("->", "red") + ` ${file.split(".")[0]}`)
  }
  const legacyFilesFolder = fs
    .readdirSync('./commands/legacy')
    .filter((file) => !file.includes('.'));
  for (const folder of legacyFilesFolder) {
    const legacyFiles = fs
      .readdirSync(`./commands/legacy/${folder}`)
      .filter((file) => file.endsWith('.js'));
    console.log('')
    console.log(colorText("|", "red") + ` ${folder}`)
    for (const file of legacyFiles) {
      const command = require(`./legacy/${folder}/${file}`);
      console.log(colorText("|->", "red") + ` ${file.split(".")[0]}`)
    }
  }
  console.log(colorText("Yay it loaded! :D", "green"))
  client.on('message', message => {
    let prefix = legacy
    if (message.author.id === client.user.id) return
    if (!message.content.toLowerCase().startsWith(`${prefix}.`)) return
    var text = message.content.toLowerCase().replace(`${prefix}.`, '')
    const legacyFiles = fs
      .readdirSync(`./commands/legacy`)
      .filter((file) => file.endsWith('.js'));
    for (const file of legacyFiles) {
      const command = require(`./legacy/${file}`);
      command(client, message, text);
    }
    const legacyFilesFolder = fs
      .readdirSync('./commands/legacy')
      .filter((file) => !file.includes('.'));
    for (const folder of legacyFilesFolder) {
      const legacyFiles = fs
        .readdirSync(`./commands/legacy/${folder}`)
        .filter((file) => file.endsWith('.js'));
      for (const file of legacyFiles) {
        const command = require(`./legacy/${folder}/${file}`);
        command(client, message, text);
      }
    }
  })

  // Splatoon Rotations
  console.log(colorText("Booting up Nintendo Switch! So fun.. :D", "green"))
  client.on("ready", () => {
    require("./infinite.js")(client)
    setInterval(() => {
      require("./infinite.js")(client)
    }, 30000)
  })
}