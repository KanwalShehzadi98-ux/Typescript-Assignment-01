var myName = "Kanwal";
var str1 = "hello";
var str2 = "HELLO";
var x = 10;
var y = 20;
var colors = ['Red', 'Yellow', 'Green', 'Blue'];
console.log("myName == \"Kanwal\" => ".concat(myName == "Kanwal"));
console.log("myName != \"Kanwal\" => ".concat(myName != "Kanwal"));
console.log("Tests using the lower case function str1 == str2 => ".concat(str1.toLowerCase() == str2.toLowerCase()));
console.log("x == y => ".concat(x == y));
console.log("x != y => ".concat(x != y));
console.log("x > y => ".concat(x > y));
console.log("x < y => ".concat(x < y));
console.log("x >= y => ".concat(x >= y));
console.log("x <= y => ".concat(x <= y));
console.log("(x > y) && (x != 10) => ".concat((x > y) && (x != 10)));
console.log("(x >= y) || (x == 10) => ".concat((x >= y) || (x == 10)));
console.log("!(x == 20) || (x != 10) => ".concat((x > y) && (x != 10)));
console.log("Is Red color in the color array? ".concat(colors.includes('Red')));
console.log("Is Pink color in the color array? ".concat(colors.includes('Pink')));
