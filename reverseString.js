
const reverseFunction = (str) => {
    let strLength = str.length - 1;

    let reverseString = '';
    for (let i = strLength; i >= 0; i--) {
        let elements = str[i];
        reverseString = reverseString + elements;
    }
    return reverseString;
}




const text = 'Md Hamimimul Haque';
const result1 = reverseFunction(text);
console.log(result1)











// =====================================================
// function reverseString(a) {
//     reversresult = 0;
//     for (var i = 0; i < a.length; i++) {
//         var rvs = a[i];
//         reversresult = rvs + reversresult;
//     }
//     return reversresult;
// }




// var para = "This is Md Hamimul Haque";
// var result = reverseString(para);
// console.log(result);