const global = {
  currentPage: window.location.pathname,
};

// highlight active link
const highlightActiveLink = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
};

//init App

const init = () => {
  switch (global.currentPage) {
    case '/':
    case 'index.html':
      console.log('Home Page');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('Tv Details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }
  highlightActiveLink();
};

document.addEventListener('DOMContentLoaded', init);
