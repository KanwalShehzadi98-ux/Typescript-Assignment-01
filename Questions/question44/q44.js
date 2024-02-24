function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log("".concat(ingredient));
    }
}
make_sandwich('Cheese', 'Bread', 'Cabbage');
console.log('-------------------------------');
make_sandwich('Ketchup', 'Egg', 'Onion');
console.log('-------------------------------');
make_sandwich('Chicken', 'Olives', 'Tomato');
