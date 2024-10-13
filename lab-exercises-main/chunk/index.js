// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const arrayLength = array.length;
    let chunkedArray = [];
    let tempArray = [];
    for (let i = 0; i < arrayLength; i++) {
        tempArray.push(array[i]);
        if (tempArray.length === size) {
            chunkedArray.push(tempArray);
            tempArray = [];
        }
    }
    if (tempArray.length !== 0) chunkedArray.push(tempArray);
    return chunkedArray;
}
console.log(chunk([1, 2, 3], 1));
module.exports = chunk;
