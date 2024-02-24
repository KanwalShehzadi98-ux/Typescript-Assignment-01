var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinalNumber;
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var i = myArray_1[_i];
    if (i == 1) {
        ordinalNumber = "st";
    }
    else if (i == 2) {
        ordinalNumber = "nd";
    }
    else if (i == 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(i).concat(ordinalNumber));
}
