const {Client} = require('discord.js');
const {TOKEN, PREFIX} = require ('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${PREFIX}salut`) {
    msg.channel.send('Je suis le bot !');
  }
});

client.login(TOKEN);