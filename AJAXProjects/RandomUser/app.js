import get from './getElement.js';
import getUser from './fetchUser.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');

const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn) => btn.classList.remove('active'));
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    const { label } = btn.dataset;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');
    });
  });
};

const showUser = async () => {
  //   get user from API
  const person = await getUser();
  //   console.log(person);
  // Display user
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
