// ---------->> with includes

const removeDuplicateNum = (arr) => {
  const arrLength = arr.length - 1;
  const pureNumber = [];
  for (let i = 0; i <= arrLength; i++) {
    let number = arr[i];
    if (pureNumber.includes(number) === false) {
      pureNumber.push(number);
    }
  }
  return pureNumber;
}

let numbers = [10, 20, 30, 10, 50, 20, 10, 60, 70, 80, 20, 40, 90, 10, 10];
const result = removeDuplicateNum(numbers)

console.log(result)



//---------->> with indexOf
var names = ["Rahim", "Karim", "Tamal", "Himel", "Tamal", "Karim"];
var uniqueName = [];
for (var i = 0; i < names.length; i++) {
  var elements = names[i];
  var index = uniqueName.indexOf(elements);
  if (index == -1) {
    uniqueName.push(elements);
  }
  console.log(uniqueName);
}

console.log("result = ", uniqueName);