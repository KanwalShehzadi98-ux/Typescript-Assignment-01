var guestList = ['Aown', 'Abbas', 'Mishal'];
//  0       1       2
console.log("Mishal Can't Come");
var index = guestList.indexOf('Mishal');
if (index != -1) {
    guestList.splice(index, 1);
}
guestList.push('Tasleem');
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var i = guestList_1[_i];
    console.log("Dear ".concat(i, "!\nYou are cordially invited to my dinner.\nTiming is 10 PM.\nRegards: Kanwal Shehzadi"));
    console.log('----------------------');
}
