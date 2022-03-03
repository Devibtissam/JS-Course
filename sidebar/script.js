const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.toggle');
const sideBar = document.querySelector('.sidebar-items');
console.log(closeBtn);
console.log(toggleBtn);

function clodeButton() {
  sideBar.classList.add();
}

toggleBtn.addEventListener('click', () => {
  sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});
