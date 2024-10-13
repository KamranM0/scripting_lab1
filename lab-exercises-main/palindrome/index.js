// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const arrayOfStr = Array.from(str);
    const reverseArrayOfStr = arrayOfStr.reverse();
    if (str === reverseArrayOfStr.join('')) {
        return true;
    }
    return false;
}
console.log(palindrome('salas'));
module.exports = palindrome;
