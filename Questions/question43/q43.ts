function make_great(magicians : string[]) : string[]{
    let great_magicians : string[] = [];
    for(let magician of magicians){
        great_magicians.push(`the GREAT ${magician}`);
    }
    return great_magicians;
}

function showMagicians(magicians : string[]) : void{
    for(let magician of magicians){
        console.log(magician);
    }
}

let magicians : string[] = ['Kanwal','Mishal','Aown','Abbas'];
let magicians2 : string[] = magicians.slice();
showMagicians(magicians);
console.log("----------------------------------------------");
magicians2 = make_great(magicians2);
showMagicians(magicians2);