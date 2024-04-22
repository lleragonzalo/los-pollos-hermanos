const menuItemsContainer = document.querySelector('.menu-items');

function updateTotal() {
  let subtotal = 0;

  const quantityInputs = document.querySelectorAll('.quantity-input');

  quantityInputs.forEach(input => {
    const quantity = parseInt(input.value);
    const price = parseFloat(input.dataset.price);
    subtotal += quantity * price;
  });

  const total = subtotal.toFixed(2);
  document.querySelector('#total').textContent = '$' + total;
}

menuItemsContainer.addEventListener('input', function (event) {
  if (event.target.classList.contains('quantity-input')) {
    updateTotal();
  }
});

fetch('src/menu.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const menuList = data.menuList;
    menuList.forEach(menuItem => {
      const menuItemElement = document.createElement('div');
      menuItemElement.classList.add('menu-item');

      const imageElement = document.createElement('img');
      imageElement.src = `./src/assets/images/gastro/gasto-item-${menuItem.menuName.toLowerCase().replace(/ /g, '-')}.jpg`;
      imageElement.alt = menuItem.menuName;

      const titleElement = document.createElement('h3');
      titleElement.textContent = menuItem.menuName;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = menuItem.menuDescription;

      const priceElement = document.createElement('p');
      priceElement.classList.add('price');
      priceElement.textContent = `$${menuItem.menuPrice.toFixed(2)}`;

      const calculatorElement = document.createElement('div');
      calculatorElement.classList.add('calculator');

      const labelElement = document.createElement('label');
      labelElement.setAttribute('for', `quantity-input-${menuItem.menuId}`);
      labelElement.textContent = 'Quantity:';

      const inputElement = document.createElement('input');
      inputElement.type = 'number';
      inputElement.min = '0';
      inputElement.value = '0';
      inputElement.classList.add('quantity-input');
      inputElement.dataset.price = menuItem.menuPrice.toFixed(2);
      inputElement.id = `quantity-input-${menuItem.menuId}`;

      calculatorElement.appendChild(labelElement);
      calculatorElement.appendChild(inputElement);

      menuItemElement.appendChild(imageElement);
      menuItemElement.appendChild(titleElement);
      menuItemElement.appendChild(descriptionElement);
      menuItemElement.appendChild(priceElement);
      menuItemElement.appendChild(calculatorElement);

      menuItemsContainer.appendChild(menuItemElement);
    });
  })
  .catch(error => {
    console.error('Error al cargar el menú:', error);
  });
