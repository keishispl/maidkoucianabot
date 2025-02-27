const fs = require("fs");
const express = require("express");
const { Client, Collection, MessageEmbed } = require("discord.js");
const app = express();

module.exports = async (client, legacy) => {
  console.log(`\x1b[36mWaking up from my sleep.. >.<\x1b[0m`)

  
  // Legacy Commands
  console.log(`========================================`)
  console.log(`\x1b[33mFunctions.. :>\x1b[0m`)
  const functionFiles = fs
    .readdirSync(`./commands/functions`)
    .filter((file) => file.endsWith('.js'));
  for (const file of functionFiles) {
    const command = require(`./functions/${file}`);
    console.log(`\x1b[31m-> \x1b[0m${file.split(".")[0]}`)
  }
  const functionFilesFolder = fs
    .readdirSync('./commands/functions')
    .filter((file) => !file.includes('.'));
  for (const folder of functionFilesFolder) {
    const functionFiles = fs
      .readdirSync(`./commands/functions/${folder}`)
      .filter((file) => file.endsWith('.js'));
    console.log('')
    console.log(`\x1b[31m| \x1b[0m${folder}`)
    for (const file of functionFiles) {
      const command = require(`./functions/${folder}/${file}`);
      console.log(`\x1b[31m|-> \x1b[0m${file.split(".")[0]}`)
    }
  }
  console.log(`\x1b[32mYay it loaded! :D\x1b[0m`)

  // Slash Commands
  client.commands = new Collection();
  const db = require('quick.db')

  // No Folder Slash Commands
  console.log(`========================================`)
  console.log(`\x1b[33mSlash commands.. :>\x1b[0m`)
  const outerCommandFiles = fs
    .readdirSync(`./commands/slash`)
    .filter((file) => file.endsWith('.js'));
  for (const file of outerCommandFiles) {
    const command = require(`./slash/${file}`);
    const slashName = file.split(".")[0];
    client.commands.set(command.help.name, { ...command.help, ...{ exec: command.exec } })
    console.log(`\x1b[31m-> \x1b[0m${slashName}`)
  }

  // Foldered Slash Commands
  const commandFolders = fs.readdirSync('./commands/slash').filter((file) => !file.includes('.'));
  for (const folder of commandFolders) {
    const commandFiles = fs
      .readdirSync(`./commands/slash/${folder}`)
      .filter((file) => file.endsWith('.js'));
    console.log('')
    console.log(`\x1b[31m| \x1b[0m${folder}`)
    for (const file of commandFiles) {
      const command = require(`./slash/${folder}/${file}`);
      const slashName = file.split(".")[0];
      client.commands.set(command.help.name, { ...command.help, ...{ exec: command.exec } })
      console.log(`\x1b[31m|-> \x1b[0m${slashName}`)
    }
  }
  console.log(`\x1b[32mYay it loaded! :D\x1b[0m`)

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
  console.log(`========================================`)
  console.log(`\x1b[33mLegacy commands.. :>\x1b[0m`)
  const legacyFiles = fs
    .readdirSync(`./commands/legacy`)
    .filter((file) => file.endsWith('.js'));
  for (const file of legacyFiles) {
    const command = require(`./legacy/${file}`);
    console.log(`\x1b[31m-> \x1b[0m${file.split(".")[0]}`)
  }
  const legacyFilesFolder = fs
    .readdirSync('./commands/legacy')
    .filter((file) => !file.includes('.'));
  for (const folder of legacyFilesFolder) {
    const legacyFiles = fs
      .readdirSync(`./commands/legacy/${folder}`)
      .filter((file) => file.endsWith('.js'));
    console.log('')
    console.log(`\x1b[31m| \x1b[0m${folder}`)
    for (const file of legacyFiles) {
      const command = require(`./legacy/${folder}/${file}`);
      console.log(`\x1b[31m|-> \x1b[0m${file.split(".")[0]}`)
    }
  }
  console.log(`\x1b[32mYay it loaded! :D\x1b[0m`)
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
  console.log(`\x1b[32mBooting up Nintendo Switch! So fun.. :D\x1b[0m`)
  client.on("ready", () => {
    require("./infinite.js")(client)
    setInterval(() => {
      require("./infinite.js")(client)
    }, 30000)
  })
}