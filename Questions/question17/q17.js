var guestList = ['Fayyaz', 'Aown', 'Safdar', 'Abbas', 'Tasleem', 'Asma'];
console.log("I can invite only two people on dinner");
for (var i = guestList.length; i > 2; i--) {
    var dropped = guestList.pop();
    console.log("Sorry! ".concat(dropped, " I can't invite you to dinner."));
}
console.log(guestList);
while (guestList.length > 0) {
    var a = guestList.shift();
    console.log("Dear ".concat(a, "!\nYou are STILL cordially invited to my dinner.\nTiming is 10 PM.\nRegards: Kanwal Shehzadi"));
    console.log('----------------------');
}
console.log("GUEST LIST = ".concat(guestList));
