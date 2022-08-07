// ---------> with function
const maxMinFun = (arr) => {
    const arrLength = arr.length - 1;

    let max = arr[0];
    let min = arr[0];


    for (let i = 0; i <= arrLength; i++) {
        // --- max value
        if (arr[i] >= max) {
            max = arr[i];
        }
        // --- min value
        if (arr[i] <= min) {
            min = arr[i];
        }
    }

    let finalResult = `The max number is ${max} and The min number is ${min}`;
    return finalResult;

}

const res = maxMinFun([10, 20, 30, 2, 6, 4, 40, 50, 60, 20, 353, 43, 24, 22, 500]);
console.log(res);



//=======================================================================================

// --------->  without Function

var numbers = [10, 20, 70, 40, 50];

var maxNum = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (maxNum < element) {
        maxNum = element;
    }
}

console.log("Maximum number is : " + maxNum);


// min
var nid = [10, 20, 30, 40, 5];
var min = nid[0];
for (var i = 0; i < nid.length; i++) {
    var loop = nid[i];
    if (min > loop) {
        min = loop;
    }
}

console.log("minimum number is : " + min);