const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const article = e.currentTarget.parentElement.parentElement;
    article.classList.toggle('show-text');
  });
});
