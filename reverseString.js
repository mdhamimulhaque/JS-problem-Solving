function reverseString(a){
    reversresult = 0;
    for(var i = 0; i < a.length; i++){
        var rvs = a[i];
        reversresult = rvs + reversresult;
    }
    return reversresult;
}




var para ="This is Md Hamimul Haque";
var result = reverseString(para);
console.log(result);