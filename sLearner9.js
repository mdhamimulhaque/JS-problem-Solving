// Write a function that takes two arguments X and Y as integers. And returns a value of X to the power of Y.
// অনুবাদ: একটি ফাংশন লিখুন যা দুটি আর্গুমেন্ট X এবং Y পূর্ণসংখ্যা হিসাবে নেয়। এবং Y এর শক্তিতে X এর একটি মান প্রদান করে।

// Note: The function will work like Math.pow(). And You cannot use any built-in methods.
// অনুবাদ: ফাংশনটি Math.pow() এর মতো কাজ করবে। এবং আপনি কোনো বিল্ট-ইন পদ্ধতি ব্যবহার করতে পারবেন না।
//======================================================================================================


// x * x = y;
// y * x = z;
// z * x = xx;
// ------------- > 1st way
const powerFunction = (x, y) => {
    let pow = 1;
    for (let i = 1; i <= y; i++) {
        pow *= x;
    }
    return pow;

}

const res = powerFunction(3, 6);

console.log(res)

// ------------- > 2nd way
const powerFun = (x, y) => {
    return x ** y;
}

console.log(powerFun(3, 6))
