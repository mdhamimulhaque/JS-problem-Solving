// Write a JavaScript program to display the current day and time in the following 
// Sample Output : 
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

//------------current day --------------
const day = new Date().getDay();
const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];
const currentDay = `Today is : ${days[day]}.`
console.log(currentDay);

//------------ current time --------------
let hour  = new Date().getHours();
const minute  = new Date().getMinutes();
const seconds  = new Date().getSeconds();

const amPm = hour >= 12 ? 'PM' : 'AM';
hour =`${hour} ${amPm}` 

const currentTime = `Current Time is : ${hour} : ${minute} : ${seconds}`;
console.log(currentTime)