// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const stringN = n.toString();
    const isNegative = stringN[0] === '-';
    const arrayN = Array.from(stringN);

    const reverseArrayN = arrayN.reverse();
    if (isNegative) {
        reverseArrayN.pop();
    }
    const reverseStringN = reverseArrayN.join('');
    let reverseNum = Number(reverseStringN);
    if (isNegative) reverseNum = reverseNum * -1;
    return reverseNum;
}
console.log(reverseInt(-5500));
module.exports = reverseInt;
