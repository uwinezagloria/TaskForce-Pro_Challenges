
const promptSync=require('prompt-sync');
let prompt=promptSync();
function transformString(input) {
    var output = '';
    var length = input.length;

    if (length % 3 === 0) {
        // Reverse the string
        output = input.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        for (var i = 0; i < input.length; i++) {
            output += input.charCodeAt(i) + ' ';
        }
        // Remove the trailing space
        output = output.trim();
    }

    // If length is divisible by both 3 and 5, perform both operations
    if (length % 3 === 0 && length % 5 === 0) {
        output = output.split('').reverse().join('');
        var tempOutput = '';
        for (var j = 0; j < output.length; j++) {
            if (output[j] === ' ') {
                tempOutput += ' ';
            } else {
                tempOutput += output.charCodeAt(j) + ' ';
            }
        }
        output = tempOutput.trim();
    }

    return output || input;
}

// Accept input from the user using prompt
var userInput = prompt("Enter a string:");

// Check if the user entered a string
if (userInput !== null && userInput !== "") {
    console.log("Input:", userInput);
    console.log("Output:", transformString(userInput));
} else {
    console.log("No input provided.");
}
