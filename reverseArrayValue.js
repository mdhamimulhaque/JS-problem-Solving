// --------reverse array looping --------


var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var arrLength = arr.length - 1;

var newArr = [];
var index = 0;
for (var i = arrLength; i >= 0; i--) {
    newArr[index] = arr[i];
    index++;
}

console.log(newArr)