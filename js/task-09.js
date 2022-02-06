const buttonRef = document.querySelector('.change-color');
const color = document.querySelector('.color');

const changeBodyColor = () => {
    document.body.style.background = getRandomHexColor();
    color.innerHTML = getRandomHexColor();
};

buttonRef.addEventListener('click', changeBodyColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
