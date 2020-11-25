module.exports= {
    name: 'newtrial',
    description: "Jorvuld will set up a trial sign up",
    execute(message, args){

         if (message.content === 'newtrial') {
            message.channel.send('😔');
            };
    }
}