import backgroundImage from "../assets/planetaBackground.png";
import criptopurrs from "../assets/criptopurrs.png";
import luna from "../assets/NFT LUNA.png";
import tierra from "../assets/NFT TIERRA.png";
import marte from "../assets/NFT MARTE.png";
import NavarComponent from "../components/navarComponent";
import FooterComponent from "../components/FooterComponent";
function HomeScreen() {
  return (
    <>
    <NavarComponent/>
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
          <div className="row d-flex justify-content-center align-items-center mb-3">
            <div className="col-8">
                <div className="row text-light justify-content-center hashtag pt-2">
                    #gophoralanzatunombrealespacio
                </div>          
                <div className="row">
                  <div className="col-4 p-0">
                    <img src={luna} alt="Plan luna" className="img-fluid"/>
                    </div>
                  <div className="col-4 p-0">
                    <img src={tierra} alt="Plan tierra" className="img-fluid"/>
                  </div>
                  <div className="col-4 p-0">
                    <img src={marte} alt="Plan marte" className="img-fluid"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1 col-md-0"></div>
                  <div className="col-lg-6 col-md-6 bitacora-custom py-2 px-0 d-flex flex-column align-items-center justify-content-center">
                    <div>
                    <span className="text-warning">BITACORA DE VIAJE_</span><br/>
                    HORIZONTE DE EXPLORACIÓN, 
                    ESTRATOSFERA.
                    <br/><span className="text-warning">LANZAMIENTO_</span><br/>
                    11/11/23
                    ESTACIÓN TERRESTRE ABE AMACHUMA.
                    <br/><span className="text-warning">TRIPULACIÓN_</span><br/>
                    12.
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center px-0">
                    <button type="button" className="btn btn-outline-warning button-custom-marte py-3">Comprar <br/>MARTE ID NFT</button>
                  </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <img src={criptopurrs} alt="Criptopurrs" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent/>
    </>
  )
}

export default HomeScreen