const cowsay = require('cowsay')

const myInfo = require('./information')

const information = myInfo.information

console.log(cowsay.say({
    text: `Hello I'm ${information.myName} from ${information.campus}`,
    e: "oO",
    T: "U "
}));