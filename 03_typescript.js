"use strict";
// Basic Types (must know)
// let myName: string = "Himansu";
// console.log(myName);
// let myName2: string = "Pigu";
// console.log(myName2);
// let myName3: string = "Pigu And Himansu";
// console.log(myName3);
// let myName4: string = "piyush";
// console.log(myName4);
// let age: number = "24";
// console.log(age);
// let isActive: boolean = true;
// let isActive: boolean = "4";
// console.log(isActive);
// let numbers: number[] = [1, 2, 3]
// let numbers: number[] = "222"
// let names: string[] = ["a", "b"]
// console.log(names)
// console.log(numbers)
// Objects (v.imp)
// type User = {
//   name: string;
//   age: number;
// };
// const user: User = {
//   name: "himansu",
//   age: 22
// }
// const user: User = {
//   name: "himansu",
//   age: "22"
// }
// console.log(user.name)
// console.log(user.age)
// Functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(2, 2));
const vehicleDetails = {
    name: "Toyota",
    year: 2022
};
console.log(vehicleDetails.name);
console.log(vehicleDetails.year);
const bookDetails = {
    name: "Think and Grow Rich",
    shop: "Amazon",
    price: 10,
    isBuy: true
};
console.log(bookDetails.name);
console.log(bookDetails.shop);
console.log(bookDetails.price);
console.log(bookDetails.isBuy);
// Function more practice
// function numbersPlayCard(num1: number, num2: number): number {
//   return num1 + num2;
// }
console.log(numbersPlayCard(5, 10));
// const myName = "Himansu";
// myName();
const user = {
    name: "dholu"
};
console.log(user.location);
function addTwoNum(num1, num2) {
    const sumNum = `the numbers are ${num1} and ${num2}`;
    console.log(sumNum);
}
addTwoNum(2);
