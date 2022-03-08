const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(2022, 2, 25, 11, 30, 0);
// console.log(futureDate);
// will always check what is the current date and add more 10 days
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear();
const day = futureDate.getDay();
const month = futureDate.getMonth();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hours}:${mins}am`;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  console.log(today);
  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1 day = 24hrs

  // values in ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // calculate all values

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  // set values array

  const values = [days, hours, minutes, seconds];
  console.log(values);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveway has expired</h4>`;
  }
}
// countdown
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
