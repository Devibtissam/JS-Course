const inputs = document.querySelectorAll('input');
const parentClassAdded = document.querySelector('.classes-list div');
const classText = [];
const removedClasses = [];

function sortClasses(classvalue) {
  const classArr = classvalue.split(' ').sort();
  // assign the class values to our array
  for (let i = 0; i < classArr.length; i++) {
    classText.push(classArr[i]);
  }
  // sort the list of classes name in alphabetically order
  return classText.sort();
}

inputs.forEach((input) => {
  input.addEventListener('blur', (e) => {
    const input = e.currentTarget;
    const inputType = e.currentTarget.getAttribute('class');
    const inputTypeValue = e.currentTarget.value.toLowerCase();

    // check which  input user typed
    if (inputType === 'classes-to-add') {
      const textClasses = sortClasses(inputTypeValue);

      // to remove elt and start sorting it from over
      while (parentClassAdded.firstChild) {
        parentClassAdded.firstChild.remove();
      }
      for (let i = 0; i < textClasses.length; i++) {
        const createdElt = document.createElement('span');
        createdElt.classList.add(textClasses[i]);
        createdElt.innerHTML = `${textClasses[i]}`;
        parentClassAdded.appendChild(createdElt);
      }
      input.value = '';
    } else if (inputType === 'classes-to-remove') {
      const childrenElt = parentClassAdded.children;
      for (const childElt of childrenElt) {
        if (childElt.classList.contains(inputTypeValue)) {
          childElt.remove();
        }
      }
    }
  });
});
