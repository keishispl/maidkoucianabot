// Constructors
const fs = require("fs");
const express = require("express");
const { Client } = require("discord.js");
const app = express();

// Listen
app.get("/", (res) => {
  res.send("Express App");
});
app
  .listen(9696, () => {
    console.log(`========================================`)
    console.log("\x1b[35mLOGIN INTO BOT SUCCESSFULLY!\x1b[0m");
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

// VSKouciana
//let legacy = "vsk"
//let token = "MTEwNzIwMjI2ODczNTk5NTk4NA.G3fl2x._A1LW4V-X2TtxOp5jaesMvwd-a-4BPFJgE71zA"
// MaidKouciana
let legacy = "mk"
let token = "MTA4MzA5NDQ1Mjc5MDM3NDQ2NQ.G4FRRz.AnAHKYFZfBMeYHOrgp5T48fF4s9WXBzGvDLFtw"

require('./commands/activities.js')(client, legacy)
require('./commands/handler.js')(client, legacy)
client.login(token);