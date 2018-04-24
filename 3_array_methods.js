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
console.log('%c EX 8: Array.prototype.join(); [\'Gdańsk\', \'Warszawa\', \'Gdynia\']', 'color: green');

var citiesInPoland = ['Gdańsk', 'Warszawa', 'Gdynia'];

var getStringWithCities = citiesInPoland.join();

console.log(getStringWithCities);

