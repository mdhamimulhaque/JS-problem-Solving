// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// =======================================================================

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const calculator = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        const squre = Math.pow(number, 2);
        sum = sum + squre;
    }

    const ava = (sum / numbers.length).toFixed(2);
    return ava;
}

const res = calculator(numbers);
console.log(res)

