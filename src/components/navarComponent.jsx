import logo from "../assets/logo.png";

function NavarComponent() {
  return (
    <nav className="navbar navbar-expand-lg"data-bs-theme="dark">
    <div className="container-fluid justify-content-between">
        <a className="navbar-brand ms-3" href="#">
            <img className="custom-logo" src={logo} alt="Gophora icon"/>
        </a>
        <div className="me-3">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link my-nav-link active" aria-current="page" href="#">
                <span className="text-warning">NFT </span> 
                COLLECTIBLES</a>
              </li>
              <li className="nav-item">
              <a className="nav-link my-nav-link" href="#">ROADMAP</a>
              </li>
              <li className="nav-item">
              <a className="nav-link my-nav-link" href="#">PRODUCTOS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link my-nav-link"  href="#">TEAM</a>
              </li>
              <li className="nav-item">
              <a className="nav-link my-nav-link"  href="#">LOGIN / <span className="text-warning">REGISTER </span> </a>
              </li>
          </ul>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default NavarComponent