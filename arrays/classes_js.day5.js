var object1 = {value: 10};
var object2 = object1;
var object3 = { value: 10};
console.log(object1 === object2);
console.log(object1 === object3);
console.log(object1.value =15);
console.log(object2.value);
console.log(object3.value);
// With objects we are always referncing, referencing other variables
// alot of times we get reference type errors.
const object4 = {
    a:function(){
        console.log(this)
    }
}
class Player {
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name},I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
        console.log('wizard', this);
    }
    play(){
        console.log(`Weeee I'm a ${this.type}`)
    }
}
const wizardKing = new Wizard('Garrett', 'Level 99');
const WizardQueen = new Wizard('Charisma', 'Level 98')
// making copies is instantiating, using refernces with super()