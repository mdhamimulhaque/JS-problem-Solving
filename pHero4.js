// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


function multiplicationTableFun(x) {
    let num = x;
    for (let i = 1; i <= 10; i++) {
        let res = num * i;
        console.log(x + " * " + i + " = " + res);
    }
}

multiplicationTableFun(13);
