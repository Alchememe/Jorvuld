const _ = require("lodash");
// Add some die rolls.
function canIHaveAStick() {
    // Define the output message.
    var msg;
    // Generate a random number between 1 and 20, inclusive.
    var stickRoll = _.random(1, 20);
    // If they roll a 20, they get a stick. youGetAStick() will define what kind.
    if (stickRoll === 20) {
      msg = youGetAStick();
    } else {
      // Otherwise, they do not get a stick.
      msg = "No.";
    }
    return msg;
  }
  
  // What kind of stick will you get?
  function youGetAStick() {
    // Create an object to lookup weapon traits.
    var weaponTraits = {
      0: "a powered",
      1: "a charged",
      2: "a precise",
      3: "a infused",
      4: "a defending",
      5: "a training",
      6: "a sharpened",
      7: "a decisive"
    };
    // Inline if-statement. If 1, make it lightning, else make it resto.
    var stickList = {
        1: "lightning staff",
        5: "restoration staff",
        10: "ice staff",
        15: "inferno staff",
        0: "bow",
        2: "bow",
        3: "bow",
        4: "bow",
        6: "bow",
        7: "bow",
        8: "bow",
        9: "bow",
        11: "bow",
        12: "bow",
        13: "bow",
        14: "bow",
        16: "bow",
        17: "bow",
        18: "bow",
        19: "hiti bow"
    };
    // Roll a die to see what trait to give it.
    var trait = weaponTraits[_.random(8)];
    var stickType = stickList[_.random(20)];
    var stickString = "Okay, you can have " + trait + " " + stickType + "";
    return stickString;
  }  

module.exports= {
    name: 'givesticks',
    description: "Jorvuld will probably deny you resto stick",
    execute(message, args){
        message.channel.send(canIHaveAStick());
    }
};
