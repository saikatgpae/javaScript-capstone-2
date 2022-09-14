const footer = () => {
  const footer = document.createElement('footer');
  footer.classList = 'footer';
  footer.innerHTML = 'Created by Microverse under the CC license';
  document.body.append(footer);
};

export default footer;