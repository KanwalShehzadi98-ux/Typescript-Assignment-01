let myArray : number[] = [1,2,3,4,5,6,7,8,9];
let ordinalNumber : string;

for(let i of myArray){
    if(i == 1){
        ordinalNumber = "st";
    }
    else if(i == 2){
        ordinalNumber = "nd";
    }
    else if(i == 3){
        ordinalNumber = "rd";
    }
    else{
        ordinalNumber = "th";
    }
console.log(`${i}${ordinalNumber}`);
}
