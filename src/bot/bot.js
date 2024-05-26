require("dotenv").config();
const { token, dbToken } = process.env;
const mongoose = require("mongoose");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const g = GatewayIntentBits;
const fs = require("fs");
const client = new Client({
  allowedMentions: {
    parse: ['users', 'roles'], repliedUser: true
  },
  intents: [
    g.Guilds,
    g.GuildMembers,
    g.GuildModeration,
    g.GuildEmojisAndStickers,
    g.GuildIntegrations,
    g.GuildWebhooks,
    g.GuildInvites,
    g.GuildVoiceStates,
    g.GuildPresences,
    g.GuildMessages,
    g.GuildMessageReactions,
    g.GuildMessageTyping,
    g.DirectMessageTyping,
    g.DirectMessageReactions,
    g.DirectMessages,
    g.MessageContent,
    g.GuildScheduledEvents,
    g.DirectMessages,
  ],
});
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];

client.on("error", () => { });

const funtionFolders = fs.readdirSync(`./src/bot/functions`);
for (const folder of funtionFolders) {
  const funtionFiles = fs
    .readdirSync(`./src/bot/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of funtionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);
(async () => {
  mongoose.Promise = global.Promise;
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(dbToken, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .catch(console.error);
})();

// stats
