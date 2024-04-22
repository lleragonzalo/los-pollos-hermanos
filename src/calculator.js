const vatRate = 0.21;
const discountRate = 0.20;

function updateTotal() {
  const quantityInputs = document.querySelectorAll('.quantity-input');
  const vatAmount = document.querySelector('#vat');
  const discountAmount = document.querySelector('#discount');
  const totalAmount = document.querySelector('#total');

  let subtotal = 0;

  quantityInputs.forEach(input => {
    const quantity = parseInt(input.value);
    const menuItemId = input.id.split('-')[2];
    const menuItemElement = document.querySelector(`#quantity-input-${menuItemId}`);
    const menuItemPrice = parseFloat(menuItemElement.closest('.menu-item').querySelector('.price').textContent.replace('$', ''));

    subtotal += quantity * menuItemPrice;
  });

  const vat = subtotal * vatRate;
  const milkshakeQuantityInput = document.getElementById('quantity-input-4');
  const milkshakeQuantity = milkshakeQuantityInput ? parseInt(milkshakeQuantityInput.value) : 0;
  const milkshakeDiscount = milkshakeQuantity * 1.80 * discountRate;
  const total = subtotal + vat - milkshakeDiscount;

  vatAmount.value = vat.toFixed(2);
  discountAmount.value = milkshakeDiscount.toFixed(2);
  totalAmount.textContent = `$${total.toFixed(2)}`;
}

const quantityInputs = document.querySelectorAll('.quantity-input');
quantityInputs.forEach(input => {
  input.addEventListener('change', updateTotal);
});

updateTotal();
