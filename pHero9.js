// Write a function called odd_even() which takes an integer value and tells whether this 
// value is even or odd. 
// ● Has return + Has parameter

// ==================================================================================================

const odd_even = (x) => {
    if (x % 2 === 0) {
        return "This is even number";
    } else {
        return 'This is odd number'
    }
}

const res = odd_even(19);
console.log(res)