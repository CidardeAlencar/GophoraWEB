import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import startship from "../assets/GOPHORASTARSHIP.png";

function NavarComponent() {
  return (
    <nav className="navbar navbar-expand-lg "data-bs-theme="dark">
    <div className="container-fluid">
        <NavLink className="navbar-brand ms-3" to="/">
            <img className="custom-logo" src={logo} alt="Gophora icon"/>
        </NavLink>
        <div className="me-3">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown">
              <NavLink exact to="/" className="nav-link my-nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="text-warning">NFT </span> 
                COLLECTIBLES
              </NavLink>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link dropdown-item">
                    <span className="text-warning">NFT </span> 
                    COLLECTIBLES
                  </NavLink>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li className='text-warning'>Marte ID NFT</li>
                <li><a className="dropdown-item" href="#">Comprar MARTE ID NFT</a></li>
                <li><a className="dropdown-item" href="#">MINTEAR NFT</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li className='text-warning'>Criptopurrs</li>
              </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/ruta" className="nav-link my-nav-link">
                  ROADMAP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productos" className="nav-link my-nav-link">
                  PRODUCTOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/equipo" className="nav-link my-nav-link">
                  TEAM
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="https://discord.gg/jbhzwjfcpV" target="_blank" rel="noopener noreferrer">
                  <img src={startship} alt="gophora startship"/>
                </a>
              </li>
          </ul>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default NavarComponent