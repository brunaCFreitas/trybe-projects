const paragraph = document.getElementById('rgb-color');
const paletteColors = document.getElementById('palette-colors');
const answer = document.getElementById('answer');
const buttonRestart = document.getElementById('reset-game');
const scoreElement = document.getElementById('score');

let clickCounter = 0;

function addPoint() {
  const points = localStorage.getItem('points') || 0;
  localStorage.setItem('points', +points + 3);
}

function updatePoints() {
  const points = localStorage.getItem('points') || 0;
  scoreElement.innerText = points;
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

function checkColors(event) {
  clickCounter += 1;

  if (clickCounter > 1) {
    return;
  }

  const targetColor = event.target.style.backgroundColor;
  const isCorrect = targetColor === paragraph.innerText;

  if (isCorrect) {
    answer.innerText = 'Acertou!';
    addPoint();
    updatePoints();
    return;
  }

  answer.innerText = 'Errou! Tente novamente!';
}

function addRandomColor(colors) {
  const colorPalette = document.createElement('div');
  colorPalette.className = 'ball';
  const color = generateRandomColor();
  colorPalette.style.backgroundColor = color;
  paletteColors.addEventListener('click', checkColors);
  colors.push(color);
  paletteColors.appendChild(colorPalette);
  paragraph.innerText = color;
}

function createPaletteColors() {
  const colors = [];

  for (let index = 0; index < 6; index += 1) {
    addRandomColor(colors);
  }

  colors.sort(() => 0.5 - Math.random());
  paragraph.innerText = colors.shift();
}

function restore() {
  answer.innerText = 'Escolha uma cor';
  paletteColors.innerHTML = '';
  clickCounter = 0;
  createPaletteColors();
  updatePoints();
}

createPaletteColors();
updatePoints();

buttonRestart.addEventListener('click', () => {
  restore();
});
