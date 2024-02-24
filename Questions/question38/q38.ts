function describeCity(city : string ,country : string = "England") : void{
    console.log(`${city} is in ${country}`);
}

describeCity('Karachi','Pakistan');
describeCity('Istanbul','Turkey');
describeCity('Paris');