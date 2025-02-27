// Constructors
const fs = require("fs");
const express = require("express");
const { Client } = require("discord.js");
const app = express();
require('dotenv').config();

app.get("/", (res) => {
  res.send("Express App");
});
app
  .listen(9696, () => {
    console.log(`========================================`)
    console.log("\x1b[35mEating breakfast.. mmh\x1b[0m");
  })
  .on("error", function () {
    process.once("SIGUSR2", function () {
      process.kill(process.pid, "SIGNUSR2");
    });

    process.on("SIGINT", function () {
      process.kill(process.pid, "SIGINT");
    });

    process.on("uncaughtException", function () {
      console.log(" UNCAUGHT EXPECTION ");
      console.log("[Inside 'uncaught expection']");
    });
  });

const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });

// Config

let legacy = "mk"
let token = process.env.TOKEN

require('./commands/activities.js')(client, legacy)
require('./commands/handler.js')(client, legacy)
client.login(token);