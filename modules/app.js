import { people } from './utils/data.js';
import showPeople from './utils/showpeople.js';
import get from './utils/getElement.js';

const btn = get('.btn');
const container = get('.container');
// const containerTwo = get('.container-1');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
