let counterValue = 0;
const decrementBtnRef = document.querySelector(
    'button[data-action="decrement"]',
);
const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector(
    'button[data-action="increment"]',
);

decrementBtnRef.addEventListener('click', () => {
    valueRef.innerHTML = counterValue -= 1;
});
incrementBtnRef.addEventListener('click', () => {
    valueRef.innerHTML = counterValue += 1;
});
