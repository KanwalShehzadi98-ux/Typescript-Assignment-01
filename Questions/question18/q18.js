var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myArray = ['Turkey', 'Canada', 'Paris', 'Germany', 'Netherlands'];
console.log("Original Order : ", myArray);
console.log("Alphabetical Order : ", __spreadArray([], myArray, true).sort());
console.log("Still In Original Order : ", myArray);
console.log("Alphabetical Order : ", __spreadArray([], myArray, true).sort().reverse());
console.log("Still In Original Order : ", myArray);
console.log("Reversed Order : ", myArray.reverse());
console.log("Original Order : ", myArray.reverse());
console.log("Alphabetical Order : ", myArray.sort());
console.log("Reversed Alphabetical Order : ", myArray.reverse());
