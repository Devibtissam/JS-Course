export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw Error('You did not select the element');
}
