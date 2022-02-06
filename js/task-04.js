let counterValue = 0;

const decrementBtnRef = document.querySelector(
    'button[data-action="decrement"]',
);
const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector(
    'button[data-action="increment"]',
);

const decrement = () => (valueRef.innerHTML = counterValue -= 1);
const increment = () => (valueRef.innerHTML = counterValue += 1);

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
