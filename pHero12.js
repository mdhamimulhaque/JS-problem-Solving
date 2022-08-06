// write a function that will take a array [2023,2024,2025,2026,2027,2028,2029,2030] as a input and it will check if each every year. if a year is a leap year insert that year in a new year in a new array, return the new array and print the result
//==============================================================================================================


// RULES :: To check if a year is a leap year, divide the year by 4. If it is fully divisible by 4, it is a leap year. For example, the year 2016 is divisible 4, so it is a leap year, whereas, 2015 is not. However, Century years like 300, 700, 1900, 2000 need to be divided by 400 to check whether they are leap years or not.



const leapYear = (arr) => {
    let arrLength = arr.length - 1;
    let leapYear = [];
    for (let i = 0; i <= arrLength; i++) {
        let year = arr[i];

        if (((year % 4) === 0) || ((year % 100) !== 0) && ((year % 400) === 0)) {
            leapYear.push(year)
        }
    }

    return leapYear;
}
const allYears = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const res = leapYear(allYears);
console.log(res)