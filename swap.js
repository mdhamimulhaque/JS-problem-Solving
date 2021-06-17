
// =============1st way==============
// var a = 20;
// var b = 30;
// console.log("Before swap : a =" + a,  "b = " + b);

// a = 30;
// b = 20;
// console.log("After swap : a =" + a,  "b = " + b);

// ==========2nd way=============
// var x = 50;
// var y = 70;
// console.log("before swap : x =" + x,  "y = " + y);
// x = x + y;
// y = x- y;
// x = x - y;

// console.log("After swap : x =" + x,  "y = " + y);

// ===========3nd way(js way)=============
var p = 40;
var q = 50;
console.log("Before swap : p = " + p,  "q = " + q);
[p,q] = [q,p];

console.log("After swap : p = " + p,  "q = " + q);