// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
// ===================================================================================================================

const lowerCaseFun = (x) => {
    let converter = x.toLowerCase();
    return converter;
}

const res = lowerCaseFun("HIMEL TAMAL ARMAN Ragib");
console.log(res)