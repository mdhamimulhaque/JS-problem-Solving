// একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে।
// =================================================================================================================


const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const arrLength = numbers.length;

numbers[3] = 400;
console.log(numbers)

numbers.push(100, 500);
console.log(numbers);

numbers.pop();
console.log(numbers);