function Counter(element, value) {
  //   console.log(element, value);
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  // bind this to all functions
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.increase = function () {
  console.log(this);
  this.value += 1;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  console.log(this);
  this.value -= 1;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  console.log(this);
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    // console.log(element);
    return element;
  }
  throw new Error(
    `please check "${selection}" selector, no such element exists `
  );
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
