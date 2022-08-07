const reverseWordFunction = (str) => {
    const word = str.split(' '); //----> output : [ 'This', 'is', 'Md', 'Hamimul', 'Haque' ]
    const reverse = [];
    const wordLength = word.length - 1;
    for (let i = wordLength; i >= 0; i--) {
        let elements = word[i];
        reverse.push(elements);

    }
    const reverseWord = reverse.join(' ');
    return reverseWord;
}

const text = "This is Md Hamimul Haque";
const res = reverseWordFunction(text);
console.log(res)