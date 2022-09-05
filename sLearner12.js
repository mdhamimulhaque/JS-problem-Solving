// Problem: 12
// Write a function that takes an array of a number and return the largest number in an array
// *অনুবাদ: একটি ফাংশন লিখুন যা একটি সংখ্যার অ্যারে নেয় এবং একটি অ্যারের মধ্যে সবচেয়ে বড় সংখ্যা রিটার্ন করে।
// Note: Please avoid any kind of built-in feature for now.
// =====================================================================================================

const arr = [1, 5, 26, 11, 10, 7]
const largestNumber = (arr) => {
    let num = arr[0];
    arr.forEach(x => {
        if (num < x) {
            num = x;
        }
    })
    return num;
}

const res = largestNumber(arr);
console.log(res)