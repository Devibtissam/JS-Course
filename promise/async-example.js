const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`failed to select the element : ${element}`));
    }
  });
}
// async function by default return a promise
async function displayColor() {
  try {
    await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(1500, heading3, 'blue');
  } catch (error) {
    console.log(error);
  }
  return 'hello';
}

btn.addEventListener('click', async () => {
  displayColor().then((msg) => console.log(msg));
});
