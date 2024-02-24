let x : number = 10;
let y : number = 20;
let z : boolean = true;
let myName : string = "Kanwal";
let fruits : string[] = ["Apple","Mango","Banana"];

console.log(`1. x > y (I predict False) => ${x > y}`);
console.log(`2. x <= y (I predict True) => ${x <= y}`);
console.log(`3. x == y (I predict False) => ${x == y}`);
console.log(`4. !z (I predict False) => ${!z}`);
console.log(`5. name == \"Kanwal\" (I predict True) => ${myName == "Kanwal"}`);
console.log(`6. fruits.length > 0 (I predict True) => ${fruits.length > 0}`);
console.log(`7. fruits.length === 0 (I predict False) => ${fruits.length === 0}`);
console.log(`8. name != "Kanwal" (I predict False) => ${myName != "Kanwal"}`);
console.log(`9. x < y (I predict True) => ${x < y}`);
console.log(`10. x != y (I predict True) => ${x != y}`);