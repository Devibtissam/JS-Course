const menuBtn = document.querySelector('.menu-btn');
console.log(menuBtn);

const menuItems = document.querySelector('.menu-dropdown-items');
console.log(menuItems);

menuBtn.addEventListener('click', () => {
  if (menuItems.classList.contains('drp-display')) {
    menuItems.classList.remove('drp-display');
  } else {
    menuItems.classList.add('drp-display');
  }
});
