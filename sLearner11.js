// Write a function that takes an integer and print a pattern for this number.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি পূর্ণসংখ্যা নেয় এবং এই সংখ্যার জন্য একটি প্যাটার্ন তৈরি করুন


// 5
// 55
// 555
// 5555
// 55555
// 5555
// 555
// 55
// 5
// =====================================================================================================

const fullPattern = (n) => {
    // ----> 1st step
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + n;
        }
        console.log(pattern)
    }

    // -----> 2nd step
    for (let x = n; x >= 1; x--) {
        let pattern2 = "";
        for (let y = x - 1; y >= 1; y--) {
            pattern2 = pattern2 + n;
        }
        console.log(pattern2)
    }

}

const res = fullPattern(5);





