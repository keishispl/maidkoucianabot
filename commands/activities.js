const { colorText, seperateText } = require("./colorText.js"); 

module.exports = async (client, prefix) => {
  
  // Activities
  client.on("ready", () => {
    console.log(colorText("Lemme SNS my friends rq!", "green"))
    console.log(seperateText())
    console.log(colorText("Ready for work! ^^", "aqua"));
    console.log(colorText(`${client.user.username} is ready for anything! :)`, "aqua"));
    const activities = [
      { name: `with ${prefix}.help`, type: "PLAYING" },
      { name: "with /help", type: "PLAYING" },
      { name: "music", type: "LISTENING" },
      { name: "scolding from Keishi", type: "LISTENING" },
      { name: "スプラトゥーン3", type: "COMPETING" },
      { name: "プロセカ", type: "COMPETING" },
      { name: "星屑テレパス", type: "WATCHING" },
      { name: "天体のメソッド", type: "WATCHING" }
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