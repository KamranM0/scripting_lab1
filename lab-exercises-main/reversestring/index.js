// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arrayStr = Array.from(str);
    const reverseArrayStr = arrayStr.reverse();
    return reverseArrayStr.join('');
}

module.exports = reverse;
