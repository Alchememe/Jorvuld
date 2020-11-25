const _ = require("lodash");

function saythelinejorvy(){
    var mechanicLines = {
        0:"Quick, get me some imp innards!",
        1:"I need stranglers' sap to create an antidote!",
        2:"The antidotes finished! Here, take it!",
        3:"I can use imp innards to create an antidote!",
        4:"Stranglers' sap! That's just what I need!",
        5:"This antidote should help you!",
        6:"I've prepared an antidote for you!",
        7:"Those are Orbs of Stone! Be careful! Their beams will slow you down.",
        8:"Destroy the stone orb that's freed itself!",
        9:"You can't allow that stone orb to roam free! Eliminate it!",
        10:"A stone orb has begun to move! Destroy it, quickly!",
        11:"Destroy the stone orb that's freed itself!",
        12:"Be careful fighting those two, they look stronger than the rest. Smell stronger, too."+"The two ogres ahead seem to be the clan leaders. We'll need to defeat them in order to continue on. No easy task, I'm sure. They look to be formidable foes. I'd advise you to keep your distance, if possible. I'd hate for anyone to become infected.",
        13:"Watch out! You won't survive the Matriarch's swing!",
        14:"The Matriarch is going in for the kill!",
        15:"One strike from that giantess and you're done for!",
        16:"Watch out for this one! She must be the giants' matriarch.",
        17:"KNEEL OR BE CRUSHED!",
        18:"The geyser is going to blow soon! Be careful!",
        19:"That geyser looks like it's about to blow!",
        20:"Do you feel that? I think the geyser's about to go off!",
        21:"Watch out for the geyser! I can hear it rumbling!",
        22:"He wasn't the one leading them, I'm afraid. My friends, prepare yourself. For Zaan the Scalecaller...has risen again.",
    };
    var line = mechanicLines [_.random(22)];
    var lineString = "" + line + "" ;
    return lineString;
}


module.exports= {
    name: 'jorvy',
    description: "Jorvuld will call out one of his many cool sayings",
    execute(message, args){
        message.channel.send(saythelinejorvy());
    }
};