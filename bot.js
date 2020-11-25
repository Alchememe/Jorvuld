const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'j!';

const fs = require('fs');

const _ = require("lodash");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',() => {
    console.log('Jorvuld is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'soup'){
     client.commands.get('soup').execute(message, args);

    } else if (command === 'zaan'){
        client.commands.get('zaan').execute(message, args);

    } else if (command === 'thurvokun'){
        client.commands.get('thurvokun').execute(message, args)

    } else if (command ==='history'){
        client.commands.get('history').execute(message, args)

    } else if (command === 'help'){
        client.commands.get('help').execute(message, args)

    } else if (command === 'givesticks'){
        client.commands.get('givesticks').execute(message, args)

    } else if (command === 'jorvy'){
        client.commands.get('jorvy').execute(message, args)

    } else if (command === 'newtrial'){
        client.commands.get('newtrial').execute(message, args)

    } else if (command === 'morty'){
        client.commands.get('morty').execute(message, args)

    } else if (command ==='letters'){
        client.commands.get('letters').execute(message, args)
        
    } else if (command ==='cure'){
        client.commands.get('cure').execute(message, args)
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
