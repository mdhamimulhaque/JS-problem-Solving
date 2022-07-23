// Write a program to find the sum of numbers from N to M.


const sum = (N, M) => {
    let res = 0;
    for (let i = N; i <= M; i++) {
        res = res + i;
    }
    console.log(res)
}

sum(1, 100);

