const numberOfElements = document.querySelector('input[name=elements]');
const textOfElements = document.querySelector('input[name=texts]');
const typeOfElements = document.querySelector('select[name=type]');
const btnCreate = document.querySelector('input[name=create]');
const results = document.querySelector('.results');

btnCreate.addEventListener('click', () => {
while (results.firstChild) {
  results.firstChild.remove();
}
  for (let i = 0; i < numberOfElements.value; i++) {
    const eltCreated = document.createElement(typeOfElements.value);
    eltCreated.className = 'style-elt';
    eltCreated.innerHTML = `${textOfElements.value}`;
    results.appendChild(eltCreated);
  }
});
