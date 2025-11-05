import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../public/img/logoFelipeBart.jpeg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        {/* Título da Logo */}
        <div className="navbar-header">
          <img src={Logo} className="tituloLogo" />
        </div>

        {/* Botão para Navbar em modo responsivo */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de Navegação */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Início
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Portfólio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
