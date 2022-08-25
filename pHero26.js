// You have an array [ 1, 9, 17, 22 ]. Add the all elements 
// of this array and give output. Do this using for loop & 
// array.reduce() method. 
// ================================================================

const array = [1, 9, 17, 22];
const arrayLength = array.length;

// ---> with for loop
let total = 0;
for (let i = 0; i < arrayLength; i++) {
    const element = array[i];
    total = total + element;
}

console.log(total)

// ---> with reduce

const res = array.reduce((num, num2) => {
    return num + num2;
}, 0)
console.log(res)
