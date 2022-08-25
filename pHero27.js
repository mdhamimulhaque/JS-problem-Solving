// const people =[
//     {name:'Meena',age:20},
//     {name:'Rina',age:15},
//     {name:'Suchorita',age:22},
// ]

// Follow above array of objects. So, you have 3 objects as 
// array element. Can you find out the total sum from here? 
// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it. 
// But! Wait !! Wait !!! Do the same task using array.reduce() method. 

// ==============================================================

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
]

const result = people.reduce((num, num2) => {
    let total = num + num2.age;
    return total;
}, 0)

console.log(result)