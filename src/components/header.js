import logo from '../images/food_logo.png';

const navBar = document.getElementById('navbar');
const header = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="img-logo"> <a href="#"><img src=${logo} alt="logo" id="logo"></a></div>
   <nav>
   <ul id="nav-bar">
        <li>Home</li>
        <li id="meals-count"></li>
        <li>Contacts</li>
    </ul>
    </nav>
    `;
  navBar.appendChild(header);
};
export default header;