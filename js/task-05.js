const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const inputHandle = () =>
    inputRef.value.length
        ? (outputRef.textContent = inputRef.value)
        : (outputRef.textContent = 'Anonymous');

inputRef.addEventListener('input', inputHandle);
