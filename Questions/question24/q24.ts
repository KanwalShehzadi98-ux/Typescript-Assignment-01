let myName : string = "Kanwal";

let str1 : string = "hello";
let str2 : string = "HELLO";

let x : number = 10;
let y : number = 20;

let colors : string[] = ['Red','Yellow','Green','Blue'];
 
console.log(`myName == "Kanwal" => ${myName == "Kanwal"}`);
console.log(`myName != "Kanwal" => ${myName != "Kanwal"}`);

console.log(`Tests using the lower case function str1 == str2 => ${str1.toLowerCase() == str2.toLowerCase()}`);

console.log(`x == y => ${x == y}`);
console.log(`x != y => ${x != y}`);
console.log(`x > y => ${x > y}`);
console.log(`x < y => ${x < y}`);
console.log(`x >= y => ${x >= y}`);
console.log(`x <= y => ${x <= y}`);

console.log(`(x > y) && (x != 10) => ${(x > y) && (x != 10)}`);
console.log(`(x >= y) || (x == 10) => ${(x >= y) || (x == 10)}`);
console.log(`!(x == 20) || (x != 10) => ${(x > y) && (x != 10)}`);

console.log(`Is Red color in the color array? ${colors.includes('Red')}`);
console.log(`Is Pink color in the color array? ${colors.includes('Pink')}`);