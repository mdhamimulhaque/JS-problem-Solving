// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

const friends = ['emonRownok', 'anik', 'sefat', 'ashik', 'esha', 'asif_Mahamud', 'tusher', 'shuvo']


const arrowFun = (arr) => {
    const arrLength = arr.length;
    const newArr = [];
    for (let i = 0; i < arrLength; i++) {
        let element = arr[i];
        const eleLength = element.length;
        if (eleLength % 2 == 0) {
            newArr.push(element)
        }
    }
    return newArr;
}

const res = arrowFun(friends);
console.log(res)