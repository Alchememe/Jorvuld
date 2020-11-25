module.exports = {
    name: 'help',
    description: "Jorvuld will show his notes on Zaan",
    execute(message, args) {
        message.channel.send({embed: {
            color: 000,
            description: "These are the tasks I can currently assist you in!:\n",
            fields: [
              {
                name: "Command List",
                value: "j!help - Gives you a list of all my comands\nj!soup - Zaan!\nj!givesticks - Ask me for a stick, I may even drop a resto\nj!jorvy - I will say one of my many favorable lines"
              },
              {
                  name: "Lore Finder",
                  value: "j!zaan - Lorepage of Zaan the Scalecaller\nj!history - History of Zaan the Scalecaller\nj!thurvokun - Lorepage of Thurvokun\nj!morty - Lorepage of Plague Concocter Mortieu\nj!letters - A Sister's Retort, A Brother's Plea & A Sister's Regret"
              },
              {
                  name: "Mod Commands",
                  value: "j!newtrial - Creates a new trial sign up"
              }
            ]
          }})
    }
};