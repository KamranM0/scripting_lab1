// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    for (let char of str) {
        if (obj[char]) {
            obj[char] = obj[char] + 1;
        } else obj[char] = 1;
    }
    const array = Object.entries(obj);
    let maxchar = array[0][0];
    let maxnum = array[0][1];
    for (let i = 1; i < array.length; i++) {
        let curChar = array[1][0];
        let curNum = array[1][1];
        if (curNum > maxnum) {
            maxnum = curNum;
            maxchar = curChar;
        }
    }
    return maxchar;
}
console.log(maxChar('kisiiiii'));
module.exports = maxChar;
