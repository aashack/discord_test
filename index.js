const {
    Client,
    GatewayIntentBits,
} = require('discord.js');

const bot = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

bot.on('ready', () => {
    console.log(`Bot ${bot.user.tag} is logged in!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        console.log(`ping 1`);
        message.channel.send('Pong!');
      msg.reply('Pong!');
    }
  });

  bot.on('messageCreate', (message) => {
    console.log(`test 1`);
    if (message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('general kenobi')) {
        message.channel.send('Hello there!');
        message.reply('pong')
    }
});

bot.on('messageCreate', (message) => {
    console.log(`test 2`);

    if (message.content.toLowerCase().includes('ping')) {
        console.log(`pong 2`);
        message.channel.send('pong!');
    }
});

bot.on('messageCreate', (message) => {
    console.log(`test 3`);

    if (message.content.toLowerCase().includes('fudge') || message.content.toLowerCase().includes('pudding')) {
        console.log(`pong 3`);

        message.channel.send('Such language is prohibited!');
    }
});
bot.login('MTIwNjQ2MjA4ODkxOTEzMDE1Mg.G2bcT9.K0a26D633olHpqqHBmavBGRqyK1LVAgNxws8F0');