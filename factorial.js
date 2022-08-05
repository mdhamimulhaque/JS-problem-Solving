// FACTORIAL 
// 5! = 5 * 4 *3 * 2 * 1 
// 4! = 4 *3 * 2 * 1 
// 3! = 3 * 2 * 1 
// 2! = 2 * 1 

//----------> useing for loop
const factorial = (num) => {
    let calculate = 1;
    for (let i = num; i >= 1; i--) {
        calculate = calculate * i;
    }
    return calculate;
}

const res = factorial(5);
console.log(res)


//--------> With recursion 
const factorialRecursion = (num) => {
    if (num == 0) {
        return num = 1;
    }
    else {
        return num = num * factorialRecursion(num - 1);
    }
}

const res1 = factorialRecursion(5);
console.log(res1)