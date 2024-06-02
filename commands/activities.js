module.exports = async (client, prefix) => {
  // Activities
  client.on("ready", () => {
    console.log(`\x1b[32mLOADED BOT STATUS!\x1b[0m`)
    console.log(`========================================`)
    console.log(`\x1b[36mLOAD COMPLETE! LOGIN AS: ${client.user.username}\x1b[0m`);
    const activities = [
      { name: `with ${prefix}.help`, type: "PLAYING" },
      { name: "with /help", type: "PLAYING" },
      { name: "music", type: "LISTENING" },
      { name: "Splatoon 3", type: "COMPETING" },
      { name: "Hoshikuzu Telepath", type: "WATCHING" }
    ]
    let currentStatusIndex = -1;
    setInterval(() => {
      const availableActivities = [...activities];
      if (currentStatusIndex != -1) availableActivities.splice(currentStatusIndex, 1);

      const randomIndex = Math.floor(Math.random() * availableActivities.length);
      const newActivity = availableActivities[randomIndex];
      currentStatusIndex = randomIndex;
      client.user.setPresence({
        activities: [{
          name: newActivity.name,
          type: newActivity.type
        }], status: "dnd",
      })
    }, 7500)
  })
}