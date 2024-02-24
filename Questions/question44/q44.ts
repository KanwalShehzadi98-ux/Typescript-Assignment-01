function make_sandwich(...ingredients : string[]) : void{
    for(let ingredient of ingredients){
        console.log(`${ingredient}`);
    }
}

make_sandwich('Cheese','Bread','Cabbage');
console.log('-------------------------------');
make_sandwich('Ketchup','Egg','Onion');
console.log('-------------------------------');
make_sandwich('Chicken','Olives','Tomato');