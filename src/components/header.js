// import icon from '../images/food_logo.png';

// const header = () => {
//   const img = document.createElement('img');
//   img.src = icon;
//   document.body.appendChild(img);
// };

// export default header;

import logo from '../images/food_logo.png';

const header = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="img-logo"> <a href="#"><img src=${logo} alt="logo" id="logo"></a></div>
   <nav>
   <ul id="nav-bar">
        <li>Spaceships</li>
        <li>Planets</li>
        <li>Races</li>
    </ul>
    </nav>
    
    `;
  document.body.appendChild(header);
};
export default header;