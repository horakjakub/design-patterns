// three common ways of creating objects in JS

const newObject = {};
const newObject1 = Object.create(Object.prototype);
const newObject2 = new Object;

// constructor is a pattern which delivers a way 
// of constructing object with special function 
// wich has ability to create object 

function Hero (name, age) {
    this.name = name;
    this.age = age;
}

Hero.prototype.tellEveryoneThatYouWriteAwesomeCode =
    function tellEveryoneThatYouWriteAwesomeCode() {
        console.log(`I'm ${this.name} and I write awesome code!`);
    }

const robustJacob = new Hero('jacob', 34);

console.log(robustJacob);
robustJacob.tellEveryoneThatYouWriteAwesomeCode();

class ES6Hero {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    tellEveryoneThatYouWriteAwesomeCode() {
        console.log(
            `I'm ${this.age} years old write
            awesome code in !`
        );
    }
}

const awesomeES6Jacob = new ES6Hero('ES6 Jacob', 35);

console.log(awesomeES6Jacob);
awesomeES6Jacob.tellEveryoneThatYouWriteAwesomeCode()

class ES6SuperHero extends ES6Hero {
    constructor(name, age, alias){
        super(name, age)
        this.alias = alias;
    } 
}

const awesomeES6DarkKnightJacob = new ES6SuperHero('Jacob', 15 ,'Batman');
console.log(awesomeES6DarkKnightJacob);
awesomeES6DarkKnightJacob.tellEveryoneThatYouWriteAwesomeCode();

class SuperHero extends Hero {
    constructor(name, age, alias){
        super(name, age)
        this.alias = alias;
    } 
}

const robustDarkKnightJacob = new SuperHero('Jacob', 21, 'Robust Batman');
console.log(robustDarkKnightJacob);
robustDarkKnightJacob.tellEveryoneThatYouWriteAwesomeCode();
