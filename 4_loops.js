// TODO: 1. For loop loops through a block of code a number of times.
console.log('%c EX 1: For loop', 'color: green');
var name = 'Justyna';

for (var i=0; i < name.length; i++) {
    console.log('Moje imię zawiera litery: ' + name[i].toUpperCase() + '.');
}

// TODO: 2. The while loop loops through a block of code as long as a specified condition is true.
console.log('%c EX 2: while loop', 'color: green');

var products = [
    { name: '  Chleb', price: 1 },
    { name: 'Masło  ', price: 6 },
    { name: 'Czosnek  ', price: 2 }
];

var i = 0;

while (i < products.length) {
    console.log('Produkt: ' + products[i].name);
    i++;
}

// TODO: 3. Do-while loop always be executed at least once, because the code block is start before the condition is tested.
console.log('%c EX 3: Do-while loop', 'color: green');

var users = [
    { name: '  Kate', id: 1 },
    { name: 'John  ', id: 2 },
    { name: 'Tom  ', id: 3 }
];
var j = 0;

do {
    console.log('User: ' + users[j].name);
    j++;
} while (j < users.length);