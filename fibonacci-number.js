// Fibonacci number : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// const fibo =[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// rules :
// 1) fixed first two index value (0,1) & start looping with 2(because we will start our calculation from index 3)
// 2) fibo[3] = fibo[2] + fibo[1]
// 3) fibo[4] = fibo[3] + fibo[2]
// 4) fibo[55] = fibo[54] + fibo[53]
// 5) fibo[500] = fibo[499] + fibo[498]
// 5) fibo[n] = fibo[n-1] + fibo[n-2]
// 5) fibo[i] = fibo[i-1] + fibo[i-2]
// ==================================================================================================================

const fibo = [0, 1];
for (let i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo)

