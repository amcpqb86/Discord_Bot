const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.login('NzU1NTE4NjQ0Mjk2ODc2MTAz.X2EdkQ.-lxpLSMzDuvE822Nx5sKh9m-cPk');