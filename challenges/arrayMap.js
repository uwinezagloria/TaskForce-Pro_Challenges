const promptSync=require('prompt-sync');
let prompt=promptSync();
function subarray() {
    // Get array input
    let arrInput = prompt("Enter the array of integers separated by commas:");
    let array = arrInput.split(",").map(Number);

    // Get target sum input
    let target = parseInt(prompt("Enter the target sum:"));

    // Initialize variables
    let beg = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        // While sum is greater than target, move beg to the right
        while (sum > target && beg <=i) {
        sum -= array[beg];
            beg += 1;
        }

        // Check if the  sum is equal to the target
        if (sum === target) {
            console.log("Result: true");
            return;
        }
    }

    console.log("Result: false");
}

// Call the function
subarray();
