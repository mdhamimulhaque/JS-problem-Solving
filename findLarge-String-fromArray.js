// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
//=================================================================================================================
const friends = ["Minhaz", "Sefat", "Noor", "Anik", "RownokEmon", "Mamun", "Shuvo", "Oni", "Shawon", "Ayan"]

const bestFriend = (frnd) => {
    const friendsLength = frnd.length - 1;

    let bestFrnd = frnd[0];

    for (let i = 0; i <= friendsLength; i++) {
        const friend = frnd[i];
        if (friend.length > bestFrnd.length) {
            bestFrnd = friend;
        }
    }
    return bestFrnd;

}

const res = bestFriend(friends);
console.log(res)