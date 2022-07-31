// Write a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// অনুবাদ: একটি ফাংশন লিখুন যা স্ট্রিং এবং সংখ্যার একটি অ্যারে নেয় এবং অ্যারেটি ফিল্টার করে যাতে এটি শুধুমাত্র পূর্ণসংখ্যার একটি অ্যারে রিটার্ন করে।
// ====================================================================================================================

// ----------- 1st way --------------
const myArray = ["Tamal", 22, 3, 55, "Ragib", 344, 4, 5, 7, "Himel"];

const arrayFunction = (arr) => {
    let newArray = arr.filter((intArray) => {
        if (typeof intArray === 'number') {
            return intArray;
        }
    })
    console.log(newArray);
}

arrayFunction(myArray)


// --------- 2nd way -------
const myArray2 = ["a", 2, 3, 11, "b", 4, 5, 7, 100, "c"];

const arrayFunction2 = (arr) => {
    let newArray2 = [];
    let index = 0;
    let arrLength = arr.length;


    for (let i = 0; i < arrLength; i++) {
        if (typeof arr[i] !== 'string') {
            // newArray2.push(arr[i]); //--------------> solution 1
            newArray2[index] = arr[i]; //--------------> solution 2
            index++;
        }
    }

    console.log(newArray2)
}

arrayFunction2(myArray2)