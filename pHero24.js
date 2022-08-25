//  You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even 
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even 
// number.
// ===========================================================================

const oddArr = [1, 3, 5, 7, 9];

// -----> use for loop
const oddLength = oddArr.length;
const evenArr = []
for (let i = 0; i < oddLength; i++) {
    const element = oddArr[i];
    evenArr.push(element + 1)
}
console.log(evenArr);


// -----> with map
const evenArrMap = oddArr.map((x) => x + 1);
console.log(evenArrMap);