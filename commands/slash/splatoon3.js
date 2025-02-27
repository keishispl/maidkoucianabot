const { MessageEmbed } = require('discord.js')


module.exports.exec = async (client, interaction) => {
  if (interaction.options.getSubcommandGroup() === "schedule") {
    fetch('https://splatoon3.ink/data/schedules.json')
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => {
        const toTimestamp = (strDate) => {
          const dt = new Date(strDate).getTime()
          return dt / 1000
        }
        const turf = new MessageEmbed()
          .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/4/42/S3_Icon_Regular_Battle.svg/500px-S3_Icon_Regular_Battle.svg.png')
          .setAuthor('🦑 Splatoon 3 / Map Rotations')
          .setTitle("Regular Battle")
          .addField(`<t:${toTimestamp(`${json.data.regularSchedules.nodes[0].startTime}`)}:t>`, `**Turf War**\n∙ ${json.data.regularSchedules.nodes[0].regularMatchSetting.vsStages[0].name}\n∙ ${json.data.regularSchedules.nodes[0].regularMatchSetting.vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.regularSchedules.nodes[2].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.regularSchedules.nodes[2].startTime}`)}:R>**\n**Turf War**\n∙ ${json.data.regularSchedules.nodes[2].regularMatchSetting.vsStages[0].name}\n∙ ${json.data.regularSchedules.nodes[2].regularMatchSetting.vsStages[1].name}`, true)
          .addField(`<t:${toTimestamp(`${json.data.regularSchedules.nodes[1].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.regularSchedules.nodes[1].startTime}`)}:R>`, `**Turf War**\n∙ ${json.data.regularSchedules.nodes[1].regularMatchSetting.vsStages[0].name}\n∙ ${json.data.regularSchedules.nodes[1].regularMatchSetting.vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.regularSchedules.nodes[3].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.regularSchedules.nodes[3].startTime}`)}:R>**\n**Turf War**\n∙ ${json.data.regularSchedules.nodes[3].regularMatchSetting.vsStages[0].name}\n∙ ${json.data.regularSchedules.nodes[3].regularMatchSetting.vsStages[1].name}`, true)
          .setColor(`#3fff33`)
        const series = new MessageEmbed()
          .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/128px-S2_Icon_Ranked_Battle.svg.png')
          .setAuthor('🦑 Splatoon 3 / Map Rotations')
          .setTitle("Anarchy Battles - Series")
          .addField(`<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[0].startTime}`)}:t>`, `**${json.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[2].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.bankaraSchedules.nodes[2].startTime}`)}:R>**\n**${json.data.bankaraSchedules.nodes[1].bankaraMatchSettings[0].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[2].bankaraMatchSettings[0].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[2].bankaraMatchSettings[0].vsStages[1].name}`, true)
          .addField(`<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[1].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.bankaraSchedules.nodes[1].startTime}`)}:R>`, `**${json.data.bankaraSchedules.nodes[2].bankaraMatchSettings[0].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[1].bankaraMatchSettings[0].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[1].bankaraMatchSettings[0].vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[3].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.bankaraSchedules.nodes[3].startTime}`)}:R>**\n**${json.data.bankaraSchedules.nodes[3].bankaraMatchSettings[0].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[3].bankaraMatchSettings[0].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[3].bankaraMatchSettings[0].vsStages[1].name}`, true)
          .setColor(`#f07004`)
        const open = new MessageEmbed()
          .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c5/S2_Icon_Ranked_Battle.svg/128px-S2_Icon_Ranked_Battle.svg.png')
          .setAuthor('🦑 Splatoon 3 / Map Rotations')
          .setTitle("Anarchy Battles - Open")
          .addField(`<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[0].startTime}`)}:t>`, `**${json.data.bankaraSchedules.nodes[0].bankaraMatchSettings[1].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[0].bankaraMatchSettings[1].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[0].bankaraMatchSettings[1].vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[2].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.bankaraSchedules.nodes[2].startTime}`)}:R>**\n**${json.data.bankaraSchedules.nodes[1].bankaraMatchSettings[1].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[2].bankaraMatchSettings[1].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[2].bankaraMatchSettings[1].vsStages[1].name}`, true)
          .addField(`<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[1].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.bankaraSchedules.nodes[1].startTime}`)}:R>`, `**${json.data.bankaraSchedules.nodes[2].bankaraMatchSettings[1].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[1].bankaraMatchSettings[1].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[1].bankaraMatchSettings[1].vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.bankaraSchedules.nodes[3].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.bankaraSchedules.nodes[3].startTime}`)}:R>**\n**${json.data.bankaraSchedules.nodes[3].bankaraMatchSettings[1].vsRule.name}**\n∙ ${json.data.bankaraSchedules.nodes[3].bankaraMatchSettings[1].vsStages[0].name}\n∙ ${json.data.bankaraSchedules.nodes[3].bankaraMatchSettings[1].vsStages[1].name}`, true)
          .setColor(`#f07004`)
        const x = new MessageEmbed()
          .setThumbnail('https://cdn.wikimg.net/en/splatoonwiki/images/thumb/3/3e/S3_Icon_X_Battle.svg/128px-S3_Icon_X_Battle.svg.png')
          .setAuthor('🦑 Splatoon 3 / Map Rotations')
          .setTitle("X Battles")
          .addField(`<t:${toTimestamp(`${json.data.xSchedules.nodes[0].startTime}`)}:t>`, `**${json.data.xSchedules.nodes[0].xMatchSetting.vsRule.name}**\n∙ ${json.data.xSchedules.nodes[0].xMatchSetting.vsStages[0].name}\n∙ ${json.data.xSchedules.nodes[0].xMatchSetting.vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.xSchedules.nodes[2].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.xSchedules.nodes[2].startTime}`)}:R>**\n**${json.data.xSchedules.nodes[1].xMatchSetting.vsRule.name}**\n∙ ${json.data.xSchedules.nodes[2].xMatchSetting.vsStages[0].name}\n∙ ${json.data.xSchedules.nodes[2].xMatchSetting.vsStages[1].name}`, true)
          .addField(`<t:${toTimestamp(`${json.data.xSchedules.nodes[1].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.xSchedules.nodes[1].startTime}`)}:R>`, `**${json.data.xSchedules.nodes[2].xMatchSetting.vsRule.name}**\n∙ ${json.data.xSchedules.nodes[1].xMatchSetting.vsStages[0].name}\n∙ ${json.data.xSchedules.nodes[1].xMatchSetting.vsStages[1].name}\n\n**<t:${toTimestamp(`${json.data.xSchedules.nodes[3].startTime}`)}:t> ∙ <t:${toTimestamp(`${json.data.xSchedules.nodes[3].startTime}`)}:R>**\n**${json.data.xSchedules.nodes[3].xMatchSetting.vsRule.name}**\n∙ ${json.data.xSchedules.nodes[3].xMatchSetting.vsStages[0].name}\n∙ ${json.data.xSchedules.nodes[3].xMatchSetting.vsStages[1].name}`, true)
          .setColor(`#14d999`)
        if (interaction.options.getSubcommand() === "normal") {
          interaction.reply({
            embeds: [turf, series, open, x],
            ephemeral: true
          })
        } else if (interaction.options.getSubcommand() === "salmonrun") {
          fetch('https://splatoon3.ink/data/coop.json')
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(newJson => {
              const salmon = new MessageEmbed()
                .setAuthor('🐟 Splatoon 3 / Salmon Run')
                .setTitle(`<t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[0].startTime}`)}:d> <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[0].startTime}`)}:t> - <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[1].startTime}`)}:d> <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[1].startTime}`)}:t>\nEnds <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[1].startTime}`)}:R>`)
                .addField('Map', json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.coopStage.name, true)
                .addField('Weapons', json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.weapons[0].name + '\n' + json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.weapons[1].name + '\n' + json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.weapons[2].name + '\n' + json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.weapons[3].name, true)
                .addField('Boss', json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.boss.name, true)
                .setImage(json.data.coopGroupingSchedule.regularSchedules.nodes[0].setting.coopStage.image.url)
                .setThumbnail(newJson.data.coopResult.monthlyGear.image.url)
                .setColor('#ff8633')
              const salmon2 = new MessageEmbed()
                .setThumbnail(json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.coopStage.image.url)
                .setTitle(`<t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[1].startTime}`)}:d> <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[1].startTime}`)}:t> - <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[2].startTime}`)}:d> <t:${toTimestamp(`${json.data.coopGroupingSchedule.regularSchedules.nodes[2].startTime}`)}:t>`)
                .addField('Map', json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.coopStage.name, true)
                .addField('Weapons', json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.weapons[0].name + '\n' + json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.weapons[1].name + '\n' + json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.weapons[2].name + '\n' + json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.weapons[3].name, true)
                .addField('Boss', json.data.coopGroupingSchedule.regularSchedules.nodes[1].setting.boss.name, true)
                .setColor('#ff8633')
              interaction.reply({
                embeds: [salmon, salmon2],
                ephemeral: true
              })
            })
        }
      })
  }
}


module.exports.help = {
  name: "splatoon3",
  description: "About the game Splatoon 3",
  options: [
    {
      name: "schedule",
      description: "Current schedule for Splatoon 3 map rotations",
      type: "SUB_COMMAND_GROUP",
      options: [
        {
          name: "normal",
          description: "Get current schedule for Splatoon 3 map rotations",
          type: "SUB_COMMAND"
        },
        {
          name: "salmonrun",
          description: "Get current schedule for Splatoon 3 salmon run",
          type: "SUB_COMMAND"
        }
      ]
    }
  ]
}