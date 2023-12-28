function diagonalDifference(arr) {
    const n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;

    // Calculate the sum of the primary diagonal
    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
    }

    // Calculate the sum of the secondary diagonal
    for (let i = 0; i < n; i++) {
        // 3-1-0
        // 2-1-1
        console.log('arr[i][n - 1 - i] :>> ', n - 1 - i);
        secondarySum += arr[i][n - 1 - i];
    }

    // Calculate the absolute difference between the sums
    const absoluteDifference = Math.abs(primarySum - secondarySum);

    return absoluteDifference;
}

// Example usage with a predefined matrix:
const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

const result = diagonalDifference(matrix);
console.log(result);
