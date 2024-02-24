function makeShirt(size : string = "Large", text : string = "I  Love Typescript") : void {
    console.log(`A shirt with ${size} size and message ${text}`);
}

makeShirt();
makeShirt("Median");
makeShirt("Small","I love Python");