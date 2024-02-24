let guestList : string[] = ['Fayyaz','Aown','Safdar','Abbas','Tasleem','Asma'];
console.log("I can invite only two people on dinner");

for(let i =  guestList.length ; i > 2 ; i--){
    let dropped : string | undefined = guestList.pop();
    console.log(`Sorry! ${dropped} I can't invite you to dinner.`);
}

console.log(guestList);

while(guestList.length > 0){
    let a : string | undefined = guestList.shift();
    console.log(`Dear ${a}!\nYou are STILL cordially invited to my dinner.\nTiming is 10 PM.\nRegards: Kanwal Shehzadi`);
    console.log('----------------------');
}

console.log(`GUEST LIST = ${guestList}`);
