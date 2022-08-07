//  write a function which will take 3 values and return the max and min value
// =============================================================================


// const maxMinFun = (x, y, z) => {
//     let max = Math.max(x, y, z);
//     let min = Math.min(x, y, z)

//     let finalResult = `The max number is ${max} and The min number is ${min}`;
//     return finalResult;
// }

// const res = maxMinFun(10, 20, 30);
// console.log(res);


const maxMinFun = (arr) => {
    const arrLength = arr.length - 1;

    let max = arr[0];
    let min = arr[0];


    for (let i = 0; i <= arrLength; i++) {
        // --- max value
        if (arr[i] >= max) {
            max = arr[i];
        }
        // --- min value
        if (arr[i] <= min) {
            min = arr[i];
        }
    }

    let finalResult = `The max number is ${max} and The min number is ${min}`;
    return finalResult;

}

const res = maxMinFun([10, 20, 30, 2, 6, 4, 40, 50, 60, 20, 353, 43, 24, 22, 500]);
console.log(res);