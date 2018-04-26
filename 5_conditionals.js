// TODO: 1. If is specify a block of code to be executed, if a specified condition is true.
console.log('%c EX 1: If', 'color: orange');

var weight = 501;

if (weight > 500) {
    console.log("You do not qualify for free shipping");
}

// TODO: 2. If-else is specify a new condition to test, if the first condition is false.
console.log('%c EX 2: If-else', 'color: orange');

var number = 20;

if (number > 10) {
    console.log("yes");
} else {
    console.log("no");
}

// TODO: 3. If-else-if
console.log('%c EX 3: If-else-if', 'color: orange');

var color = "green";

if (color === "yellow") {
    console.log("color yellow");
} else if (color === "green") {
    console.log("color green");
} else if (color === "blue") {
    console.log("color blue")
} else {
    console.log("other color")
}


// TODO: 4. Switch is specify many alternative blocks of code to be executed.
console.log('%c EX 4: Switch', 'color: orange');

function getMyColor(color) {
    switch(color) {
        case 'yellow':
            return 'My favorite color is yellow';
            break;
        case 'green':
            return 'I have a soft spot to the green color.';
            break;
        case 'blue':
            return 'I also like blue color';
            break;
        default:
            return 'I do not like other colors';
    }
}

console.log(getMyColor('green'));

function myFunction() {
    var text;
    var day = document.getElementById("myInput").value;
        switch(day) {
        case 'Monday':
            text = 'Today is Monday';
            break;
        case 'Tuesday':
            text = 'Today is Tuesday';
            break;
        case 'Wednesday':
            text = 'Today is Wednesday';
            break;
        case 'Thursday':
            text = 'Today is Thursday';
            break;
            default:
            text = 'Today is another day';
    }
    document.getElementById("textInInput").innerHTML = text;
}

