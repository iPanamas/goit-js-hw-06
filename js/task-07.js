const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

spanRef.style.fontSize = `${inputRef.value}px`;

const handleInputRange = () => (spanRef.style.fontSize = `${inputRef.value}px`);

inputRef.addEventListener('input', handleInputRange);
