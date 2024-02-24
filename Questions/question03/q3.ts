// Name Cases: 
// Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.

let personName : string = "KaNwaL ShEhZaDi";
console.log(`Lowercase:${personName.toLowerCase()}`);
console.log(`Uppercase:${personName.toUpperCase()}`);
let firstName : string[] = personName.split(' ');
let first : string = firstName[0].toLowerCase();
let last : string = firstName[1].toLowerCase();
console.log("Titlecase:",first[0].toUpperCase() + first.slice(1) + " " + last[0].toUpperCase() + last.slice(1));
