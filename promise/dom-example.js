// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected

// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      element.style.color = color;
      resolve();
    } else {
      reject(new Error(`failed to select the element : ${element}`));
    }
  });
}

btn.addEventListener('click', () => {
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(1500, heading3, 'blue'))
    .catch((err) => console.log(err));
});
