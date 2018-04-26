// TODO: 1. The pop() method removes the last element from an array.
console.log('%c EX 1: Array.prototype.pop(); [\'tulip\', \'rose\', \'carnation\', \'orchid\']', 'color: green');

var flowers = ['tulip', 'rose', 'carnation', 'orchid'];

flowers.pop();

console.log(flowers);


// TODO: 2. The shift() method removes the first array element and make that other elements have a lower index.
console.log('%c EX 2: Array.prototype.shift(); [\'oak\', \'birch-tree\', \'ginkgo\']', 'color: green');

var trees = ['oak', 'birch-tree', 'ginkgo'];

trees.shift();

console.log(trees);


// TODO: 3. The push() method adds a new element to an array (at the end.
console.log('%c EX 3: Array.prototype.push(); [\'lark\', \'crow\', \'sparrow\']', 'color: green');

var birds = ['lark', 'crow', 'sparrow'];


birds.push('owl');

console.log(birds);


// TODO: 4. The unshift () method adds a new element to an array (at the beginning).
console.log('%c EX 4: Array.prototype.unshift(); [\'lizard\', \'chameleon\']', 'color: green');

var reptiles = ['lizard', 'chameleon'];

reptiles.unshift('snake');

console.log(reptiles);


// TODO: 5. The splice() method can be used to add new items to an array.
//The first parameter (1) defines the position where new elements should be added (spliced in).
//The second parameter (2) defines how many elements should be removed.
//The rest of the parameters ("jaszczurka", "kameleon") define the new elements to be added.
console.log('%c EX 5: Array.prototype.splice(); [\'snake\', \'lizard\', \'chameleon\', ]', 'color: green');

var reptilesOne = ['snake', 'lizard', 'chameleon'];

var reptilesInPL = reptilesOne.splice(1, 2, "jaszczurka", "kameleon");
console.log(reptilesInPL);

// TODO: 6. The slice() method slices out a piece of an array into a new array.
console.log('%c EX 6: Array.prototype.slice();', 'color: green');

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var fruitsOne = fruits.slice(3);

console.log(fruitsOne);

var fruitsTwo = fruits.slice(0, 1);

console.log(fruitsTwo);

// TODO: 7. The concat() method creates a new array by merging (concatenating) existing arrays.
console.log('%c EX 7: Array.prototype.concat();', 'color: green');

var polishNames = ['Monika', 'Artur', 'Jan'];
var englishNames = ['Monica', 'Tom', 'John'];

var names = polishNames.concat(englishNames);

console.log(names);


// TODO: 8. The reverse() method reverses the order of the elements in an array.
console.log('%c EX 8: Array.prototype.reverse(); [\'Monika\', \'Artur\', \'Jan\']', 'color: green');

var inputData = ['Monika', 'Artur', 'Jan'];

var outputData = inputData.reverse();

console.log(outputData);

// TODO: 9.The join() method joins the elements of an array into a string, and returns the string.
//The elements will be separated by a comma (,).
console.log('%c EX 9: Array.prototype.join(); [\'Gdańsk\', \'Warszawa\', \'Gdynia\']', 'color: green');

var citiesInPoland = ['Gdańsk', 'Warszawa', 'Gdynia'];

var getStringWithCities = citiesInPoland.join();

console.log(getStringWithCities);

// TODO: 10.The map() creates a new array with the results of calling a provided function on every element in the calling array.
console.log('%c EX 10: Array.prototype.map(); [1, 2, 3, 4, 5, 6]', 'color: green');

var numbers = [0, 1, 2, 3, 4, 5, 6];

var doubleNumbers = numbers.map(function(number) {
    return (number * 2);
});

console.log(doubleNumbers);
console.log(numbers);

var oddOrEven = numbers.map(function(a, b) {
    return a % 2 === 0 ? b + ' parzysta' : b + ' nieparzysta'
});

console.log(oddOrEven);

// TODO: 11.The filter() creates a new array with all elements that pass the test implemented by the provided function.
console.log('%c EX 11: Array.prototype.filter(); [1, 2, 3, 4, 5, 6]', 'color: green');

var evenNumbers = numbers.filter(function(a) {
    return a % 2 === 0
});

console.log(evenNumbers);

// TODO: 12.The some() tests whether at least one element in the array passes the test implemented by the provided function.
console.log('%c EX 12: Array.prototype.some(); [1, 2, 3, 4, 5, 6]', 'color: green');

var isAnyNumberEven = numbers.some(function (t) {
    return t % 2 === 0
});

console.log(isAnyNumberEven);

// TODO: 13.The every() tests whether all elements in the array pass the test implemented by the provided function.
console.log('%c EX 13: Array.prototype.every(); [1, 2, 3, 4, 5, 6]', 'color: green');

var areAllNumbersEven = numbers.every(function (t) {
    return t % 2 === 0
});

console.log(areAllNumbersEven);

// TODO: 14. The reduce() applies a function for each element in the array (from left to right) to reduce it to a single value.
console.log('%c EX 14: Array.prototype.reduce(); [1, 2, 3, 4, 5, 6]', 'color: green');

// var sum = numbers.reduce(function (a, b) {
//     return a + b;
// }, 0);

let sum = numbers.reduce((a, b) => {
    return a + b
}, 0); //ES6

console.log(sum);
