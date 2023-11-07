const productNameEl = document.querySelector('.productName');
const revewEl = document.querySelector('.revew');
const btnEl = document.querySelector('.btn');
const errorEl = document.querySelector('.error');




btnEl.addEventListener('click', () => {
    addRevew(productNameEl.value, revewEl.value); });

