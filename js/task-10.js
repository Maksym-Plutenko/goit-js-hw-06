const container = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', event => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    const box = document.createElement('div');
    const boxSize = 30 + index*10;
    const boxColor = getRandomHexColor();
    box.style.display = 'block';
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = `${boxColor}`;
    container.append(box);
  }
}

function destroyBoxes() {
  container.innerHTML = '';
}