let guestList : string[] = ['Aown','Abbas','Tasleem'];
console.log("We have found a bigger table!!!");

//at start
guestList.unshift('Fayyaz');

// at middle
let middle : number = Math.floor(guestList.length / 2);
guestList.splice(middle,0,'Safdar');

// at end
guestList.push('Asma');

for(let i of guestList){
    console.log(`Dear ${i}!\nYou are cordially invited to my dinner.\nTiming is 10 PM.\nRegards: Kanwal Shehzadi`);
    console.log('----------------------');
}

