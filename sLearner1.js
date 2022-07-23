// Problem: 01
// Write a program to print all even numbers from 1 to N.


const evenNumber = (n) => {
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }

}

evenNumber(10)