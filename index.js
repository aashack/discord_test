const { Client, GatewayIntentBits, Partials } = require('discord.js');

const bot = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
  });

bot.on('ready', () => {
    console.log(`Bot ${bot.user.tag} is logged in!`);
});

bot.on('messageCreate', async msg => {
    console.log("messageCreate received.")
    console.log(msg);
    if (msg.content === 'ping') {
        await msg.reply("pong")
    }
});
bot.login('MTIwNjQ2MjA4ODkxOTEzMDE1Mg.Gtkdyz.TKaDLI5ehci4Zd2flVFrDHlv-QT2bwuVALhiPE');