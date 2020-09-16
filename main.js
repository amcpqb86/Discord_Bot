const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '§salut') {
    msg.channel.send('Je suis le bot !');
  }
});

client.login('NzU1NTE4NjQ0Mjk2ODc2MTAz.X2EdkQ.wvWRIW95Yaz7MhC-p7jcMRw_CN8');