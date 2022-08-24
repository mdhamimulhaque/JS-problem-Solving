// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// ======================================================================

const array1 = [10, 20, 30];
const array2 = [40, 50];
const newArray = [...array1, ...array2];

let maxNum = newArray[0];

for (const number of newArray) {
    if (number > maxNum) {
        maxNum = number;
    }
}

console.log(maxNum)