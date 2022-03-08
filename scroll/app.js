// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // simple toggle setup
  //   linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(containerHeight);
  //   console.log(linksHeight);
  if (containerHeight === 0) {
    // if it hidden
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    // if it open
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  //   console.log(scrollHeight);
  //   console.log(navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    toplink.classList.add('show-link');
  } else {
    toplink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    // navigate to a specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    // will select that element that you clicked on and assign it into element variable
    const element = document.getElementById(id);
    // calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    console.log(position);
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
