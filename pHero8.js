// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values
// =================================================================================================================

const make_avg = (arr, len) => {
    let total = 0;
    for (i = 0; i <= len; i++) {
        total = total + arr[i];
    }
    const avarage = total / arr.length;
    return avarage;
}

const myArray = [10, 20, 30, 40, 50];
const arrLength = myArray.length - 1;
const res = make_avg(myArray, arrLength);
console.log(res);