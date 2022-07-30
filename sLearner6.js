// Write a function that takes an array and return a reverse array.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি অ্যারে নেয় এবং একটি বিপরীত অ্যারে রিটার্ন করে।

// Note: The function cannot change the main array. And you cannot use any array methods (Example: reverse() and push())
// অনুবাদ: ফাংশন প্রধান অ্যারে পরিবর্তন করতে পারবে না। এবং আপনি কোন অ্যারে মেথড ব্যবহার করতে পারবেন না (উদাহরণ: reverse() এবং push())
// ======================================================================================================================================

const mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFun = (arr) => {
    let newArray = [];
    let index = 0;
    for (i = arr.length - 1; i >= 0; i--) {
        newArray[index] = arr[i];
        index++;
    }
    return newArray;
}

const reverseArray = arrayFun(mainArray);
console.log(mainArray)
console.log(reverseArray)


