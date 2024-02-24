// Name Cases: 
// Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.
var personName = "KaNwaL ShEhZaDi";
console.log("Lowercase:".concat(personName.toLowerCase()));
console.log("Uppercase:".concat(personName.toUpperCase()));
var firstName = personName.split(' ');
var first = firstName[0].toLowerCase();
var last = firstName[1].toLowerCase();
console.log("Titlecase:", first[0].toUpperCase() + first.slice(1) + " " + last[0].toUpperCase() + last.slice(1));
