// function sum(a, b) {
// 	return a + b;
// }
// const sum = (a, b) => {
// 	return a + b;
// }
var sum = function (a, b) {
    return a + b;
};
// sum(4 + 5);
// sum(4, 5);
var answer = sum(4, 5);
// const answer = sum("hello", 5);
console.log(answer);
// tsc --init  -- for tsconfig.json
// tsc <filename.ts>  --watch  -- for watch changes
