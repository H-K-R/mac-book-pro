// total Price 
function totalPrice() {
    const fixedPrice = parseInt(document.getElementById('fixed-cost').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
    const total = fixedPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-cost').innerText = document.getElementById('footer-total').innerText = total;


}
// promo code funtion for apply discount section 
function promoApply() {
    const promoCode = document.getElementById('apply-input').value;
    if (promoCode == 'stevekaku') {
        const totalValue = parseFloat(document.getElementById('total-cost').innerText);
        document.getElementById('footer-total').innerText = (totalValue - (totalValue * 0.2));
    }
    else {
        alert("Please Enter a Valid Promo Code");
        promoCode.value = "";
      }
    document.getElementById('apply-input').value = '';
}

// memory portion & it's functionality
document.getElementById('memory8GB').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    totalPrice();
});
document.getElementById('memory16GB').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    totalPrice();
});

// storage portion & it's functionality
document.getElementById('storage256SSD').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    totalPrice();
});
document.getElementById('storage512SSD').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalPrice();
});
document.getElementById('storage1TSSD').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    totalPrice();
});

// delivery portion & it's functionality
document.getElementById('deliverySlow').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    totalPrice();
});
document.getElementById('deliveryFast').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    totalPrice();
});


