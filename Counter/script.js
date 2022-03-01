// init the counter
let counter = 0;
const Div = document.getElementById('main-content');
const counterPlaceholder = document.createElement('p');
counterPlaceholder.innerText = ` ${counter}`;
Div.appendChild(counterPlaceholder);

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('increase')) {
      counter += 1;
    } else if (e.currentTarget.classList.contains('decrease')) {
      counter -= 1;
    } else {
      counter = 0;
    }
    counterPlaceholder.innerText = ` ${counter}`;
  });
});
