let num = 74322;
let res = num % 10; //-------- show last number(2);
let res1 = num % 100; //-------- show last two number(22);
let res2 = parseInt(num / 1000 % 10) ; //-------- show second number(4);
let res3 = parseInt(num / 100 % 100) ; //-------- show second & 3rd number(43);

console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)