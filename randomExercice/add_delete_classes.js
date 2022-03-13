const inputs = document.querySelectorAll('input');
const parentClassAdded = document.querySelector('.classes-list div');

console.log(inputs);

function addClasses(classvalue) {
  const classArr = classvalue.split(' ').sort();
  for (let i = 0; i < classArr.length; i++) {
    const createdElt = document.createElement('span');
    createdElt.classList.add(classArr[i]);
    createdElt.innerHTML = `${classArr[i]}`;
    parentClassAdded.appendChild(createdElt);
  }
}

inputs.forEach((input) => {
  input.addEventListener('blur', (e) => {
    const input = e.currentTarget;
    const inputType = e.currentTarget.getAttribute('class');
    const inputTypeValue = e.currentTarget.value.toLowerCase();
    console.log(inputTypeValue);
    // check which  input user typed
    if (inputType === 'classes-to-add') {
      addClasses(inputTypeValue);
      input.value = '';
    }
  });
});
