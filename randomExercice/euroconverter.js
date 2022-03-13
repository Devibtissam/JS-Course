const inputValue = document.querySelector('input');
console.log(inputValue);
const result = document.querySelector('.result');
console.log(result);

inputValue.onkeyup = function () {
  const euroValue = inputValue.value;
  const dhValue = euroValue * 10.6309;
  result.innerHTML = `${euroValue} EU = ${dhValue.toFixed(2)} DH`;
  if (euroValue === '') {
    result.innerHTML = `{0} EU = {0} DH`;
  }
};
