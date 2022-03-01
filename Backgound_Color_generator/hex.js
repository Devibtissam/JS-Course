const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const content = document.querySelector('#main-body');
const btn = document.querySelector('.click-btn');
const colorName = document.createElement('p');
colorName.innerHTML = `Color : `;
content.appendChild(colorName);

btn.addEventListener('click', () => {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  document.body.style.backgroundColor = hex;
  colorName.innerHTML = `Color : ${hex}`;
});
