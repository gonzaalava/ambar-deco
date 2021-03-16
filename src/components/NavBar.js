import CartWidget from './CartWidget.js';
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
       <img src={"../assets/logo.png"} class="img-fluid" alt="logoambar"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">INICIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CUADROS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ESPEJOS</a>
        </li>
        <li class="nav-item">
        <CartWidget />
        </li>
      </ul>
      </div>
      </div>
      </nav>
  );
}

export default NavBar;