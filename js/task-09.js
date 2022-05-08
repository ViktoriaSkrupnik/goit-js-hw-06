const btnEl = document.querySelector('.change-color')
const colorEl = document.querySelector('.color')

btnEl.addEventListener('click', changeColor)
function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorEl.textContent = newColor;


}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}