// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const splitString = str.split(' ');
    const capitalizedArray = splitString.map(
        (el) => el.slice(0, 1).toUpperCase() + el.slice(1, el.length),
    );
    const capitalizedString = capitalizedArray.join(' ');

    return capitalizedString;
}
console.log(capitalize('i love breakfast at bill miller bbq'));
module.exports = capitalize;
