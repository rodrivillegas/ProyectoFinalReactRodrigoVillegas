import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="navBar container-fluid">
          <Link to="/" style={{textDecoration: 'none'}}>
            <h2 className="navbar-brand" >"Coder Drinks S.A.S."</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul class="dropdown-menu">
                  <Link to="categoria/cervezas" style={{textDecoration: 'none'}}>
                    <li>
                      <a className="dropdown-item">Cervezas</a>
                    </li>
                  </Link>
                  <Link to="categoria/destilados" style={{textDecoration: 'none'}}>
                    <li>
                      <a className="dropdown-item" >Destilados</a>
                    </li>
                  </Link>
                  <Link to="categoria/gaseosas" style={{textDecoration: 'none'}}>
                  <li className="dropdown-divider"></li>
                    <li>
                      <a className="dropdown-item">Gaseosas</a>
                    </li>
                  </Link>
                  <Link to="categoria/agua" style={{textDecoration: 'none'}}>
                   
                    <li>
                      <a className="dropdown-item">Agua</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <Link to="/contacto" style={{textDecoration: 'none'}}>
                <h2 className="nav-link">Contacto</h2>
              </Link>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
