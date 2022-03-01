const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const surpriseBtn = document.querySelector('.surprise-btn');
const img = document.querySelector('img');
const personName = document.querySelector('.review-name');
const personJob = document.querySelector('.review-job');

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
  {
    id: 2,
    name: 'antonio robick',
    job: 'full stack developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 3,
    name: 'jack lorins',
    job: 'ux designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 4,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  },
];

console.log(reviews.length);
// set starting item
let currentItem = 0;

function showPerson(person) {
  img.src = reviews[person].img;
  personName.textContent = reviews[person].name;
  personJob.textContent = reviews[person].job;
}
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

surpriseBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
