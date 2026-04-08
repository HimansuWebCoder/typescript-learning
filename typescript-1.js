"use strict";
// let message = "Hello";
// message.toLowerCase();
// message();
// console.log(message.toLowerCase())
function greet(person, date) {
    // console.log(`Hello ${person}, today is ${date}!`)
    // ;
    return `Helllo ${person}, today is ${date}!`;
}
greet("Himansu", 22);
// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// }
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// printId(22)
printId("22");
