// Write a function that takes an array and return the first and last elements as a new array.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি অ্যারে নেয় এবং একটি নতুন অ্যারে হিসাবে প্রথম এবং শেষ উপাদানগুলি রিটার্ন করে।


// ------- 1st way ----------
const newArray = [];
const arrayFun = (arr) => {
    newArray.push(arr.shift());
    newArray.push(arr.pop());
}

arrayFun([3, 5, 8, 18, "hellow"])
console.log(newArray)

// --------- 2nd way --------
const arrayFunc2 = (arr) => {
    return [arr[0], arr[arr.length - 1]]
}


const newArray2 = arrayFunc2(["Himel", "Ragib", "Arman", 20, 30, "Roman", "Tamal"]);
console.log(newArray2);

