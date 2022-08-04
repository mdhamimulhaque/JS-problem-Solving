// pepperoni প্রিন্ট করবা।
// ==============================================================================================================


const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}

const res = pizza.toppings;
const index = res.indexOf('pepperoni');
const finalResult = res[index];
console.log(finalResult)