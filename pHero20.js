//  একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
// =================================================================================================================

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -300, 10, 50, 100, 500];

const arrFunction = (num) => {
    const numLength = num.length - 1;
    const newArr = [];
    for (let i = 0; i <= numLength; i++) {
        const number = num[i];
        if (number >= 0) {
            newArr.push(number);
        } else {
            break;
        }

    }
    return newArr;
}

const res = arrFunction(numbers);
console.log(res)
