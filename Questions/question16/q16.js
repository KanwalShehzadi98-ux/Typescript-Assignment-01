var guestList = ['Aown', 'Abbas', 'Tasleem'];
console.log("We have found a bigger table!!!");
//at start
guestList.unshift('Fayyaz');
// at middle
var middle = Math.floor(guestList.length / 2);
guestList.splice(middle, 0, 'Safdar');
// at end
guestList.push('Asma');
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var i = guestList_1[_i];
    console.log("Dear ".concat(i, "!\nYou are cordially invited to my dinner.\nTiming is 10 PM.\nRegards: Kanwal Shehzadi"));
    console.log('----------------------');
}
