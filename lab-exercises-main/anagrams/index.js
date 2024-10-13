// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const sortedStringA = Array.from(stringA)
      .sort((a, b) => a.localeCompare(b))
      .join("")
      .toLowerCase();
    const sortedStringB = Array.from(stringB)
      .sort((a, b) => a.localeCompare(b))
      .join("")
      .toLowerCase();
    return sortedStringA === sortedStringB;
  }
console.log("True condition:", anagrams("salam", "Masla"));
console.log("False condition:", anagrams("kamran", "Eli"));
  

module.exports = anagrams;
