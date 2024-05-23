const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: "true",
  async execute(client) {
    console.log(`[       ${client.user.tag}      ] ✅ Loaded!`);
    client.user.setPresence({
      activities: [{ name: `Moo Online`, type: ActivityType.Watching }],
    });
  },
};
