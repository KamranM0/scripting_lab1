// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
const vowel = ['a', 'i', 'e', 'u', 'o'];
function vowels(str) {
    const lowerCaseStr = str.toLowerCase();
    let count = 0;
    for (let char of lowerCaseStr) {
        if (vowel.includes(char)) count++;
    }
    return count;
}

module.exports = vowels;
