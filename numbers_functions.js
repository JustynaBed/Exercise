// TODO: 1. A function parses a string and returns a floating point number


console.log('%c EX 1: parseFloat() ', 'color: green');

function convertStringToNumber(string) {
    return parseFloat(string)
}

console.log(convertStringToNumber("20"));

// TODO: 2.A function converts a number to a string.

console.log('%c EX 2: toString() ', 'color: green');

function convertNumberToString(number){
    return number.toString()
}

console.log(convertNumberToString(20));

// TODO: 3. A function converts a number into a string, keeping a specified number of decimals.

console.log('%c EX 3: toFixed() ', 'color: green');

function fewerDecimalPlaces(number) {
    return number.toFixed(2)
}

console.log(fewerDecimalPlaces(10.15689));


// TODO: 3. A function rounds a number to the nearest integer.

console.log('%c EX 3: Math.round() ', 'color: green');

function roundNumber(number) {
    return Math.round(number)
}

console.log('10.004', roundNumber(10.004));
console.log('10.5', roundNumber(10.5));
console.log('-10.5', roundNumber(-10.5));
console.log('-10.9', roundNumber(-10.9));

// TODO: 4. A function rounds a number to the nearest integer, when rounding upwards.

console.log('%c EX 4: Math.ceil() ', 'color: green');

function roundNumberUp(number) {
    return Math.ceil(number)
}

console.log('10.004', roundNumberUp(10.004));
console.log('10.5', roundNumberUp(10.5));
console.log('-10.5', roundNumberUp(-10.5));
console.log('-10.9', roundNumberUp(-10.9));

// TODO: 5. A function rounds a number downward to the nearest integer.

console.log('%c EX 5: Math.floor() ', 'color: green');

function roundNumberDown(number) {
    return Math.floor(number)
}

console.log('10.004', roundNumberDown(10.004));
console.log('10.5', roundNumberDown(10.5));
console.log('-10.5', roundNumberDown(-10.5));
console.log('-10.9', roundNumberDown(-10.9));

// TODO: 6. A function returns the integer part of a number.
// This method will not round the number up or down to the nearest integer, but simply remove the decimals.

console.log('%c EX 6: Math.trunc() ', 'color: green');

function removeDecimalPlaces(number) {
    return Math.trunc(number)
}

console.log('10.004', removeDecimalPlaces(10.004));
console.log('10.5', removeDecimalPlaces(10.5));
console.log('-10.5', removeDecimalPlaces(-10.5));
console.log('-10.9', removeDecimalPlaces(-10.9));


// TODO: 7. A function returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

console.log('%c EX 7: Math.random() ', 'color: green');

function getRandomValue() {
    return Math.random()
}

console.log(getRandomValue());

// TODO: 8. returns the value of x to the power of y.

console.log('%c EX 8: Math.pow() ', 'color: green');

function getNumberPow(base, exponent) {
    return Math.pow(base, exponent)
}

console.log(getNumberPow(2, 3));

// TODO: 9. A function returns number with the highest value.

console.log('%c EX 9: Math.max() ', 'color: green');

function getNumberMax(a, b, c, d) {
    return Math.max(a, b, c, d)
}

console.log(getNumberMax(2, 3, 10, 10.5));

// TODO: 10. A function returns the absolute value of a number.

console.log('%c EX 10: Math.abs() ', 'color: green');

function getAbsolutNumber(number) {
    return Math.abs(number)
}

console.log(getAbsolutNumber(-2));
