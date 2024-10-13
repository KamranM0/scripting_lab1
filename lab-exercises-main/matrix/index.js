// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(N) {
    const result = Array.from({ length: N }, () => Array(N).fill(0));
    let left = 0;
    let right = N - 1;
    let top = 0;
    let bottom = N - 1;
    let num = 1;

    while (num <= N * N) {
        for (let i = left; i <= right; i++) {
            result[top][i] = num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result[i][right] = num++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            result[bottom][i] = num++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            result[i][left] = num++;
        }
        left++;
    }

    return result;
}

module.exports = matrix;
