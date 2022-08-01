// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaIndex = fruits.indexOf("Banana");
var updateBanana = fruits[bananaIndex] = 'Mango';
console.log("Index of Banana: " + bananaIndex + "Replace banana to " + updateBanana);

// ---answer b
fruits.pop();
fruits.push('Watermelon');
console.log(fruits)

