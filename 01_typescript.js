"use strict";
//boolean
let isCool = false;
//number
let age = 56;
//string
let eyeColor = "brown";
let favoriteQuote = `I'm not old, I'm only ${age}`;
//Array
let pets = ["cat", "mouse", "dragon"];
let pets2 = ["pig", "lion", "dragon"];
//Tuple
let basket;
basket = ["basketball", 10];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let sizeName = Size[2];
alert(sizeName); // Displays 'Medium' as its value is 2 above
//Any
let whatever = "aaaaghhhhhh noooooo!";
//void
let sing = () => console.log("Lalalala");
//null and undefined
let meh = undefined;
let noo = null;
//never
let error = () => {
    throw Error("blah!");
};
// Type Assertions:
let ohhithere = "OH HI THERE";
let strLength = ohhithere.length;
let fightRobotArmy = (robots) => {
    console.log("FIGHT!");
};
let fightRobotArmy2 = (robots) => {
    console.log("FIGHT!");
};
//Function
let fightRobotArmyF = (robots) => {
    console.log("FIGHT!");
};
let fightRobotArmy2F = (robots) => {
    console.log("FIGHT!");
};
// *** Classes
class Animal {
    sing;
    constructor(sound) {
        this.sing = sound;
    }
    greet() {
        return "Hello, " + this.sing;
    }
}
let lion = new Animal("Lion");
// lion.sing
//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.
//Union Type
let confused = "hello";
let myFunc = (name) => {
    console.log(`hello Himansu how are you ? ${name}`);
};
myFunc("Pigu");
