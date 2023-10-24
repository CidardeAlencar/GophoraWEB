import backgroundImage from "../assets/planetaBackground.png";
import criptopurrs from "../assets/criptopurrs.png";
import luna from "../assets/NFT LUNA.png";
import tierra from "../assets/NFT TIERRA.png";
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
          <div className="row">
            <div className="col-9">
                <div className="row text-light justify-content-center">
                  #gophoralanzatunombrealespacio
                </div>
                <div className="row justify-content-center">
                  <div className="col-4">
                    <img src={luna} alt="Plan luna" className="img-fluid"/>
                    </div>
                  <div className="col-4">
                    <img src={tierra} alt="Plan tierra" className="img-fluid"/>
                  </div>
                  <div className="col-4">
                    <img src={marte} alt="Plan marte" className="img-fluid"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    BITACORA DE VIAJE_
                    HORIZONTE DE EXPLORACIÓN, 
                    ESTRATOSFERA.
                    LANZAMIENTO_
                    11/11/23
                    ESTACIÓN TERRESTRE ABE AMACHUMA.
                    TRIPULACIÓN_ 12.
                  </div>
                  <div className="col-4">
                    Comprar MARTE ID NFT
                  </div>
                </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <img src={criptopurrs} alt="Criptopurrs" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen