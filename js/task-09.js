function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const buttonChange = document.querySelector('button.change-color')
const colorValue = document.querySelector('span.color')

buttonChange.addEventListener('click', (event) => {
  let color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}
)