// TODO: 1. A function that takes a string parameter and then returns it from white-space cleanup.
console.log('%c EX 1: string.trim() ', 'color: green');
function getTrimString(str) {
    return str.trim();
}

console.log(getTrimString("    JUSTYNA"));

// TODO: 2. Breaking variables into an array of letters
console.log('%c EX 2: string.split() ', 'color: green');

var myNameWithDash = 'J_u_s_t_y_n_a';

function splitString(str, separator) {
    return str.split(separator)
}

console.log(splitString(myNameWithDash, "_"));

// TODO: 3.A function that takes a string as its parameter and "capitalizes" it
console.log('%c EX 3: str.charAt(0).toUpperCase() + str.substring(1).toLowerCase() ', 'color: green');
var myName = "JUSTYNA"

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
}

console.log(capitalize(myName));


// TODO: 4. Change the word or characters in string
console.log('%c EX 4: string.replace()', 'color: green');
var url = 'user/BASIA/3';

var replaceUrl = url.replace('BASIA', 'Katarzyna');
console.log(replaceUrl);


// TODO: 5.This method extracts the characters in a string between "start" and "end", not including "end" itself and returns the new sub string. The "end" is greater than "start"

console.log('%c EX 5: string.substring()', 'color: green');

var nameAndSurname = 'JanKowalski'

 function getSurname(str) {
     return str.substring(3)
            // str.substring(11, 3)
            // str.substring(3, 1)
 }

console.log(getSurname(nameAndSurname))
