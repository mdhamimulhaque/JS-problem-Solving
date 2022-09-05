Problem: 13
// Write a function to count the number of zeros in 2D Array and it returns the total number of Zeros.
// অনুবাদ: 2D অ্যারেতে শূন্যের সংখ্যা গণনা করার জন্য একটি ফাংশন লিখুন এবং এটি মোট কতটি শূন্যে তা রিটার্ন করে।
// Examples:
// countZero([[1,0,1],[5,1,6],[0,8,0]]) ---> 3
// countZero([[1,0,2,0],[1,1,1,0],[0,2,1,0]]) ---> 5
// countZero([[3,0,3],[8,8,8,0],[0,3,0],[1,0,1,0]]) ---> 6
// =======================================================
// ----> with map property
const arr = [[1, 0, 2, 0], [1, 1, 1, 0], [0, 2, 1, 0]];
const countZero = (arr) => {
    let num = 0;
    arr.map((arrays) => {
        arrays.map((arrayItem) => {
            if (arrayItem === 0) {
                num = num + 1;
            }
        })

    })
    return num;
}
const res = countZero(arr);
console.log(res);


// ------> with for loop

const arr1 = [[3, 0, 3], [8, 8, 8, 0], [0, 3, 0], [1, 0, 1, 0]];
const countZeroPlus = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = 0; j < element.length; j++) {
            if (element[j] === 0) {
                num = num + 1;
            }
        }
    }
    return num;
}

const res1 = countZeroPlus(arr1);
console.log(res1)


