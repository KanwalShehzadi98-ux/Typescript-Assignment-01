function makeShirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I  Love Typescript"; }
    console.log("A shirt with ".concat(size, " size and message ").concat(text));
}
makeShirt();
makeShirt("Median");
makeShirt("Small", "I love Python");
