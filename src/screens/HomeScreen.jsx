import { Link } from 'react-router-dom';
import backgroundImage from "../assets/planetaBackground.png";
import criptopurrs from "../assets/criptopurrs1.png";
import luna from "../assets/NFT LUNA.png";
// import tierra from "../assets/NFT TIERRA.png";
import marte from "../assets/NFT MARTE.png";
function HomeScreen() {
  return (
    <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container-fluid d-flex flex-column justify-content-center text-center p-0">
        <div className="line-custom py-1">
          EXPANDIMOS LOS HORIZONTES DE LO POSIBLE, Conectamos toda voluntad con la Exploración Espacial
        </div>
        <div className="line-custom2 py-1">
          Horizontes Personalizados de Experiencia, Trabajo y Educación Potenciados por I.A. + Evidencia de Habilidad Excepcional sobre Blockchain 
        </div>
        {/* body */}
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-xl-6">
                <div>
                    <a href="https://lanzatunombrealespacio.gophora.com/" target="_blank" rel="noopener noreferrer" className="row text-primary justify-content-center hashtag pt-2">
                      #gophoralanzatunombrealespacio
                    </a>
                </div>          
                <div className="row">
                  <div className="col-6 p-0 d-flex justify-content-end">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiOc65tu-f_UIUUa00lV8cz3CouQ7gRVeaWh_R52McyPvgXw/viewform" target='_blank' rel='nooppener noreferrer'>
                      <img src={luna} alt="Plan luna" className="img-fluid img-button"/>
                    </a>
                  </div>
                  {/* <div className="col-4 p-0">
                    <img src={tierra} alt="Plan tierra" className="img-fluid"/>
                  </div> */}
                  <div className="col-6 p-0 d-flex justify-content-start">
                    <Link to="/comprar">
                      <img src={marte} alt="Plan marte" className="img-fluid img-button"/>
                    </Link>
                  </div>
                </div>
                <div className="row mb-1">
                  {/* <div className="col-lg-1 col-md-0"></div> */}
                  <div className="col-lg-4 col-md-12 bitacora-custom py-2 px-0 d-flex flex-column align-items-center justify-content-center">
                    <div>
                    <span className="text-warning">BITACORA DE VIAJE_</span><br/>
                    HORIZONTE DE EXPLORACIÓN, 
                    ESTRATOSFERA.
                    <br/><span className="text-warning">LANZAMIENTO_</span><br/>
                    11/11/23
                    ESTACIÓN TERRESTRE ABE AMACHUMA.
                    <br/><span className="text-warning">TRIPULACIÓN_ </span> 
                    190.
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center px-0">
                    <Link to="/comprar">
                      <button type="button" className="btn btn-outline-warning button-custom-marte py-xxl-4 py-xl-4 py-lg-5">Comprar <br/>MARTE ID NFT</button>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center justify-content-lg-start px-0">
                    <Link to="/mintear">
                      <button type="button" className="btn btn-outline-warning button-custom-marte btn-custom py-xxl-5 py-xl-5 py-lg-5">MINTEAR<br/>NFT</button>
                    </Link>
                  </div>
                </div>
            </div>
            <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
              <img src={criptopurrs} alt="Criptopurrs" className="img-full-height"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen