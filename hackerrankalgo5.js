// Its base and height are both equal to n. 
// It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n. 

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
}

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}