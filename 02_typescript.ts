 // boolean 
let isCool: boolean = true;


// numberlet 
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
	a: 'Himansu'
}

// wizard = 5; // Type 'number' is not assignable to type 'object'


// null and undefined
let meh: undefined = undefined
let noo: null = null;

// Tuple
let basket: [string, number];
// basket = ['basketball', 5];
// basket = [5, 'basketball']; // Type 'string' is not assignable to type 'number'

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
// let sizeName: string = Size[2]
// let sizeName: string = Size.Small; // if run tsc 02_typescript.ts --watch then show  Type 'string' is not assignable to type 'number';
let sizeName: number = Size.Small;


// Any - !!!!!!!!! BE CAREFUL
let whatever: any = 'Aghhhhhhhhh noooooooooo!!!';
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

let error = (): never => {
	throw Error('ooops');
}

// interface
// interface RobotArmy {
// 	count: number,
// 	type: string,
// 	magic: string,
// }

// or can use 

type RobotArmy = {
	count: number,
	type: string,
	magic: string,
	// magic?: string,
}


let fightRobotArmy = (robots: RobotArmy) => {
	console.log('FIGHT!');
}

// fightRobotArmy({count:1 , type: 'dragon'}); // Argument of type '{ count: number; type: string; }' is not assignable to parameter of type 'RobotArmy'.
  // Property 'magic' is missing in type '{ count: number; type: string; }' but required in type 'RobotArmy'

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
	console.log('FIGHT!');
}

// Type Assertion
interface CatArmy {
	count: number,
	type: string,
	magic: string,
}

// let dog = {}  
// dog.count // Property 'count' does not exist on type '{}'

let dog = {} as CatArmy 
dog.count


// Function 
let fightRobotArmy3 = (robots: RobotArmy): void => {
	console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
	console.log("FIGHT!")
	return 5 	
}

// Class
class Animal {
	sing: string = 'allalalalal'
	// public sing: string = "allalalal" // by default this is public
	// private sing: string = "allalalal" // Property 'sing' is private and only accessible within class 'Animal'
	constructor(sound: string) {
		this.sing = sound;
	}

	greet(): string {
		return `Hello ${this.sing}`
	}
}

let lion = new Animal("RAAAWWWR");
// lion.greet()
// lion.sing() // This expression is not callable. Type 'String' has no call signatures
lion.sing

// Union
// let confused: string | number = "hello"
// let confused: string | number = 5
// let confused: string | number = t // Cannot find name 't'
// let confused: string | number = true // Type 'boolean' is not assignable to type 'string | number'
let confused: string | number | boolean = true

let x = 4   // even not assigned x: string
let x: number = 4 
x = "hello" //  Type 'string' is not assignable to type 'number'