let guestList : string[] = ['Aown','Abbas','Mishal'];
                           //  0       1       2

console.log("Mishal Can't Come");

let index : number = guestList.indexOf('Mishal');

if (index != -1){
    guestList.splice(index,1);
}

guestList.push('Tasleem');

for(let i of guestList){
    console.log(`Dear ${i}!\nYou are cordially invited to my dinner.\nTiming is 10 PM.\nRegards: Kanwal Shehzadi`);
    console.log('----------------------');
}

