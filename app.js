const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync(__dirname + '/config.json'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.indexOf('スラッシュ') !== -1) {
        msg.send('**_snash_**');
    }
});

client.login(config.token);