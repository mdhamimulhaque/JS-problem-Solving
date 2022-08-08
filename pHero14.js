// find the lowest price phone from the array
// ==========================================

const phones = [
    { name: 'samsung', price: 220000, camera: '32mp' },
    { name: 'Huawei', price: 20000, camera: '16mp' },
    { name: 'i-phone', price: 1220000, camera: '62mp' },
    { name: 'Nokia', price: 1000, camera: '24mp' },
];


const lowestValueCalculate = (phn) => {
    const phnLength = phn.length - 1;
    let lowestPricePhone = phn[0];
    for (let i = 0; i <= phnLength; i++) {
        let phone = phn[i];
        if (lowestPricePhone.price > phone.price) {
            lowestPricePhone = phn[i];
        }
    }
    return lowestPricePhone;
}

const result = lowestValueCalculate(phones);
console.log(result)
