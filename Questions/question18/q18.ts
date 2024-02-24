let myArray : string[] = ['Turkey','Canada','Paris','Germany','Netherlands'];
console.log("Original Order : ", myArray);

console.log("Alphabetical Order : ",[...myArray].sort());

console.log("Still In Original Order : ",myArray);

console.log("Alphabetical Order : ",[...myArray].sort().reverse());

console.log("Still In Original Order : ",myArray);

console.log("Reversed Order : ",myArray.reverse());

console.log("Original Order : ",myArray.reverse());

console.log("Alphabetical Order : ",myArray.sort());

console.log("Reversed Alphabetical Order : ",myArray.reverse());