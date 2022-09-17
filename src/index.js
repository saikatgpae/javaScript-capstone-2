import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import header from './components/header.js';
import loadAll from './components/loadAll.js';
import footer from './components/footer.js';
import scrollUp from './components/scrollUp.js';

// PRINT HEADER
header();

// PRINT ALL MEALS.
loadAll();

// PRINT THE FOOTER
footer();

// SCROLLUP up
scrollUp();
document.querySelector('#scroll').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});