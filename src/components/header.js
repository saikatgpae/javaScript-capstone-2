import logo from '../images/food_logo.png';

const header = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="img-logo"> <a href="#"><img src=${logo} alt="logo" id="logo"></a></div>
   <nav>
   <ul id="nav-bar">
        <li>Home</li>
        <li>Meals</li>
        <li>Contacts</li>
    </ul>
    </nav>
    `;
  document.body.appendChild(header);
};
export default header;