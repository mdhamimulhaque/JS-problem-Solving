// Write a function that takes a parameter as an integer and returns the number of digits in this parameter.
// একটি ফাংশন লিখুন যা একটি পূর্ণসংখ্যা হিসাবে একটি প্যারামিটার নেয় এবং এই প্যারামিটারে মোট কতটি সংখ্যা রয়েছে তা প্রদান করে।

// Note: You cannot change the type of value. Like, you cannot convert an integer into a string.
// দ্রষ্টব্য: আপনি মানের প্রকার পরিবর্তন করতে পারবেন না। যেমন, আপনি একটি পূর্ণসংখ্যাকে একটি স্ট্রিংয়ে রূপান্তর করতে পারবেন না।
// ==============================================================================================================

// --------> with while loop
const intDigitFun = (num) => {
    let digits = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        digits++
    }

    return digits;
}

const res = intDigitFun(123466);
console.log(res)

// ---------> with for loop

const intDigitFun2 = (num) => {
    let count = 0;
    for (let i = 0; num > 0; i++) {
        num = Math.floor(num / 10);
        count++
    }
    return count;
}

const res2 = intDigitFun2(143);
console.log(res2);