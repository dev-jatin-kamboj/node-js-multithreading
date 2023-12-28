const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

function computeDiagonalDifference(matrix) {
    const n = matrix.length
    let leftDiagonalSum = 0
    let rightDiagonalSum = 0

    matrix.forEach((el, id) => {
        leftDiagonalSum += el[id]
        rightDiagonalSum += el[n - (id + 1)]
    });

    console.log('leftDiagonalSum :>> ', leftDiagonalSum);
    console.log('rightDiagonalSum :>> ', rightDiagonalSum);
return Math.abs(leftDiagonalSum -  rightDiagonalSum)
}

const result = computeDiagonalDifference(matrix)


'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    
    const n = arr.length
    let leftDiagonalSum = 0
    let rightDiagonalSum = 0

    arr.forEach((el, id) => {
        leftDiagonalSum += el[id]
        rightDiagonalSum += el[n - (id + 1)]
    });

    console.log('leftDiagonalSum :>> ', leftDiagonalSum);
    console.log('rightDiagonalSum :>> ', rightDiagonalSum);
return Math.abs(leftDiagonalSum -  rightDiagonalSum)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
