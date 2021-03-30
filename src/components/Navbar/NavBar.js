import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><img src={Logo}/></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to={"/"}>INICIO</Link>
        </li>
        <li class="nav-item">
          <Link to={"/category/id:?"}>CUADROS</Link>
        </li>
        <li class="nav-item">
          <Link to={"/category/id:?"}>ESPEJOS</Link>
        </li>
        <li class="nav-item">
        <CartWidget Link to={"/carrito/"}/>
        </li>
      </ul>
      </div>
      </div>
      </nav>
  ); 
}

export default NavBar;