function primeNumber(n){
    for(var i = 2; i < n; i++){

        if(n % i == 0){
          return "It's not a prime number";
        }else{
          return "It's a prime number";
        }
    }
}


var result = primeNumber(120);
var result = primeNumber(27);
console.log(result);