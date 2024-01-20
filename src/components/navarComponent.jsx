// import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
// import startship from "../assets/GOPHORASTARSHIP.png";

function NavarComponent() {
  return (
    <nav className="navbar navbar-expand-lg "data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
            <img className="custom-logo" src={logo} alt="Gophora icon"/>
        </a>
        <div className="me-3">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarNav">
          <ul className="navbar-nav align-items-center">
              <li>
              {/* <NavLink exact to="/" className="nav-link my-nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="text-warning">NFT </span> 
                COLLECTIBLES
              </NavLink> */}
              <ul className="dropdown-menu">
                {/* <li className="nav-item">
                  <NavLink exact to="/" className="nav-link dropdown-item">
                    <span className="text-warning">NFT </span> 
                    COLLECTIBLES
                  </NavLink>
                </li> */}
                {/* <li><hr className="dropdown-divider"/></li>
                <li className='text-warning'>Marte ID NFT</li> */}
                {/* <li>
                  <NavLink to="/comprar" className="dropdown-item">
                    Comprar MARTE ID NFT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mintear" className="dropdown-item">
                    MINTEAR NFT
                  </NavLink>
                </li> */}
                {/* <li><hr className="dropdown-divider"/></li>
                <li className='text-warning'>Criptopurrs</li> */}
              </ul>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/" className="nav-link my-nav-link">
                  INICIO
                </NavLink>
              </li> */}
              <li className="nav-item">
                <a href="#" className="nav-link my-nav-link active">
                  INICIO
                </a>
              </li>
              <li className="nav-item">
                <a href="#nft" className="nav-link my-nav-link">
                  <span className="text-warning">NFT</span> 
                  COLLECTIBLES
                </a>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/ruta" className="nav-link my-nav-link">
                  ROADMAP
                </NavLink>
              </li> */}
              <li className="nav-item">
                <a href="#roadmap" className="nav-link my-nav-link">
                ROADMAP
                </a>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/productos" className="nav-link my-nav-link">
                  PRODUCTOS
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink to="/equipo" className="nav-link my-nav-link">
                  TEAM
                </NavLink>
              </li> */}
              <li className="nav-item">
                <a href="#team" className="nav-link my-nav-link">
                  TEAM
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="https://discord.gg/2Q4NqjVr" target="_blank" rel="noopener noreferrer">
                  <img src={startship} alt="gophora startship" style={{width:'250px'}}/>
                </a>
              </li> */}
              <li className="nav-item">
                <a href="#preguntas" className="nav-link my-nav-link">
                  FAQ 
                </a>
              </li>
              <li className="nav-item">
                <a href="#preguntas" className="nav-link my-nav-link">
                  <span className="text-warning">HAZTE TRIPULANTE</span> 
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
