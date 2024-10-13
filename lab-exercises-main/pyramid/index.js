// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let numOfEl = 1;
    let numOfSpace = n - 1;
    for (let i = 0; i < n; i++) {
        console.log(
            `${' '.repeat(numOfSpace)}${'#'.repeat(numOfEl)}${' '.repeat(numOfSpace)}`,
        );
        numOfEl = numOfEl + 2;
        numOfSpace -= 1;
    }
}
pyramid(5);
module.exports = pyramid;
