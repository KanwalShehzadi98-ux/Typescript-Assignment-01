interface Car{
    manufacturer : string,
    model : string,
    [key : string] : any;
}

function createCar(manufacturer : string , model : string , ...options : [string,any][]) : Car{
    const car : Car = {
        manufacturer : manufacturer,
        model : model
    }

    for(const [key,value] of options){
        car[key] = value;
    }

    return car;
}

const myCar = createCar("Toyota","Camry",['color','Blue'],['Year',2020]);
console.log(myCar);