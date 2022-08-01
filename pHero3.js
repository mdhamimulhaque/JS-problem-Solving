// 1. You are given three numbers 13, 79, and 45. Write a program that will print the 
// largest number using if-else.

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.

// ===========================================================================================

// ----solution 1
var x = 13;
var y = 79;
var z = 45;

if ((x > y) && (x > z)) {

    console.log("The large number is : " + x);

} else if ((y > z) && (y > z)) {

    console.log("The large number is : " + y);

} else {

    console.log("The large number is : " + z);

}

// ----solution 2

var side1 = 9;
var side2 = 8;
var side3 = 9;

if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    console.log("triangle is Isosceles")
}