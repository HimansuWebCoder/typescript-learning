// boolean 
var isCool = true;
// numberlet 
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, i'm only ".concat(age);
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'Himansu'
};
// wizard = 5; // Type 'number' is not assignable to type 'object'
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
// basket = ['basketball', 5];
// basket = [5, 'basketball']; // Type 'string' is not assignable to type 'number'
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
// let sizeName: string = Size[2]
// let sizeName: string = Size.Small; // if run tsc 02_typescript.ts --watch then show  Type 'string' is not assignable to type 'number';
var sizeName = Size.Small;
// Any - !!!!!!!!! BE CAREFUL
var whatever = 'Aghhhhhhhhh noooooooooo!!!';
whatever = 5;
whatever = true;
whatever = basket;
// void
// let sing = () => console.log();
// let sing = (): void => {
// 	console.log('lalalallllaala');
// 	return 'lala';
// }
// Type 'string' is not assignable to type 'number'
// Type '"lalallallala"' is not assignable to type 'never'
// let sing = (): never => {
// 	return 'lalallallala';
// }
/*
let sing = (): string => {
    console.log('lalalallllaala');
    return 'lala';
}*/
// never
// let error = (): never => {
// 	throw Error('ooops');
// }
// let error = (): void => {
// 	throw Error('ooops');
// }
// let error = (): string => {
// 	throw Error('ooops');
// 	return 'hello';
// }
// Type '"hello"' is not assignable to type 'never'.
// let error = (): never => {
// 	return 'hello';
// 	// throw Error('ooops');
// }
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
// fightRobotArmy({count:1 , type: 'dragon'}); // Argument of type '{ count: number; type: string; }' is not assignable to parameter of type 'RobotArmy'.
// Property 'magic' is missing in type '{ count: number; type: string; }' but required in type 'RobotArmy'
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
// let dog = {}  
// dog.count // Property 'count' does not exist on type '{}'
var dog = {};
dog.count;
// Function 
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log("FIGHT!");
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    // public sing: string = "allalalal" // by default this is public
    // private sing: string = "allalalal" // Property 'sing' is private and only accessible within class 'Animal'
    function Animal(sound) {
        this.sing = 'allalalalal';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("RAAAWWWR");
// lion.greet()
// lion.sing() // This expression is not callable. Type 'String' has no call signatures
lion.sing;
// Union
// let confused: string | number = "hello"
// let confused: string | number = 5
// let confused: string | number = t // Cannot find name 't'
// let confused: string | number = true // Type 'boolean' is not assignable to type 'string | number'
var confused = true;
var x = 4; // even not assigned x: string
var x = 4;
x = "hello"; //  Type 'string' is not assignable to type 'number'
