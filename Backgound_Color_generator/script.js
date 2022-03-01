const Colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple'];
const content = document.querySelector('#main-body');
const btn = document.querySelector('.click-btn');
const colorName = document.createElement('p');
colorName.innerHTML = `Color : `;
content.appendChild(colorName);

btn.addEventListener('click', () => {
  const pickColor = Math.floor(Math.random() * Colors.length);
  document.body.style.backgroundColor = Colors[pickColor];
  colorName.innerHTML = `Color : ${Colors[pickColor]}`;
});
