// write a function that takes an array and a string as arguments and return the index number of the string.
// অনুবাদ: একটি ফাংশন লিখুন যা আর্গুমেন্ট হিসাবে একটি অ্যারে এবং একটি স্ট্রিং নেয় এবং স্ট্রিংয়ের সূচক (ইনডেক্স ) নম্বর রিটার্ন করে।

// Note: Cannot use any built-in method.
// অনুবাদ: কোনো বিল্ট-ইন পদ্ধতি ব্যবহার করা যাবে না।
// ==========================================================================================================


const stringCalculator = (arr, str) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            console.log(arr[i])
            return i;
        }
    }

}

const indexNum = stringCalculator(['Tamal', 'Himel', 'Arman', 'Badhon'], 'Arman');
const indexNum2 = stringCalculator(['a', 'b', 'c', 'd', 'e'], 'e');
console.log(indexNum)
console.log(indexNum2)
