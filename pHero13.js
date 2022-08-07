//  write a function which will take 3 values and return the max and min value
// =============================================================================


const maxMinFun = (x, y, z) => {
    let max = Math.max(x, y, z);
    let min = Math.min(x, y, z)

    let finalResult = `The max number is ${max} and The min number is ${min}`;
    return finalResult;
}

const res = maxMinFun(10, 20, 30);
console.log(res);