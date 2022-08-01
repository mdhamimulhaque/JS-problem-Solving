// You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is 
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.
// =========================================================================================
var me = 85;
var tom = 66;
var jane = 95;
var peter = 56;

var totalMark = 49;

if (totalMark > 100) {

    console.log('your Number is Invalid');

} else if ((totalMark >= 80) && (totalMark <= 100)) {

    console.log('your grad is A');

} else if ((totalMark >= 60) && (totalMark < 80)) {

    console.log('your grad is B');

} else if ((totalMark >= 50) && (totalMark < 60)) {

    console.log('your grad is C');

} else if ((totalMark >= 40) && (totalMark < 50)) {

    console.log('your grad is D');

} else {
    console.log('your are Failed');
}
