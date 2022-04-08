// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected

// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const container = document.querySelector('.img-container');
const url = 'https://picsum.photos/200?random';

const btn = document.querySelector('.btn');

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`failed the load image from your url : ${url}`));
    });
    img.src = url;
  });
}

btn.addEventListener('click', () => {
  loadImage(url)
    .then((data) => {
      container.appendChild(data);
    })
    .catch((err) => console.log(err));
});
