// calculate total price .... looks like shopping cart
// =========================================================
const phones = [
    { name: 'samsung', price: 220000, camera: '32mp', quantity: 5 },
    { name: 'Huawei', price: 20000, camera: '16mp', quantity: 3 },
    { name: 'i-phone', price: 1220000, camera: '62mp', quantity: 4 },
    { name: 'Nokia', price: 1000, camera: '24mp', quantity: 2 },
];


const totalPriceCalculate = (items) => {
    const itemLength = items.length - 1;
    let total = 0;
    for (let i = 0; i <= itemLength; i++) {
        let item = items[i];
        const productPrice = item.price * item.quantity;
        total = total + productPrice;
    }
    return total;
}

const result = totalPriceCalculate(phones);
console.log(result);