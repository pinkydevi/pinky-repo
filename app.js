// Mamory Handle Button

document.getElementById('select-eight').addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal()
});
document.getElementById('select-sixteen').addEventListener('click', function () {

    memoryCost.innerText = '180';
    updateTotal();
});

// Storage Handle Button
document.getElementById('ssd-first').addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal();

});
document.getElementById('ssd-second').addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotal();

});
document.getElementById('ssd-third').addEventListener('click', function () {

    storageCost.innerText = '180';
    updateTotal();
});
// Delivary handle Button
document.getElementById('delivary-one').addEventListener('click', function () {
    delivaryCost.innerText = '0';
    updateTotal();
});
document.getElementById('delivary-two').addEventListener('click', function () {
    delivaryCost.innerText = '20';
    updateTotal();
});

// Best Price
const bestPrice = document.getElementById('best-price');

// Update Total price

const total = document.getElementById('total');
const totalPrice = document.getElementById('total-price');

function updateTotal() {
    const price = Number(bestPrice.value);
    const extraMemoryCost = Number(memoryCost.value);
    const extraStorageCost = Number(storageCost.value);
    const delivaryCharge = Number(delivaryCost.value);
    const totalCost = parseInt(price + extraMemoryCost + extraStorageCost + delivaryCharge);
    total.innerText = totalCost;
    totalPrice.innerText = totalCost;


}
// document.getElementById('apply-btn').addEventListener('click', function () {

//     const promoCode = document.getElementById('promo-Input').value;
//     if (promoCode == 'stevekaku') {
//         const currentPriceText = document.getElementById('total-price').innerText;
//         const currentPrice = parseInt(currentPriceText);
//         const discountPrice = currentPrice - (20 / 100);

//     }
// })
