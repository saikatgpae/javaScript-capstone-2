import scrol from '../images/scrollTop.jpeg';

const scrollUp = () => {
  document.querySelector('.scroll-up').innerHTML = `
  <a href=""><img src="${scrol}" alt="scroll up image" id="scroll"></a>`;
};

export default scrollUp;