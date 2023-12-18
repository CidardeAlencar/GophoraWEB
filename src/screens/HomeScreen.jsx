// import { Link } from 'react-router-dom';
import backgroundImage from "../assets/GOPHORASTARSHIPBUTTON3.png";
// import criptopurrs from "../assets/criptopurrs1.png";
// import luna from "../assets/NFT LUNA.png";
// import tierra from "../assets/NFT TIERRA.png";
// import marte from "../assets/NFT MARTE.png";
import logo from "../assets/logo.png";
import team from "../assets/team1.png";
import gophora from "../assets/GOPHORASTARSHIP2.png";
function HomeScreen() {
  return (
    // <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <section className="home-section">
        <div className="container-fluid d-flex flex-column justify-content-center p-0">
          <div className="text-center">
          <div className="line-custom py-1">
            EXPANDIMOS LOS HORIZONTES DE LO POSIBLE, Conectamos toda voluntad con la Exploración Espacial
          </div>
          <div className="line-custom2 py-1">
            Horizontes Personalizados de Experiencia, Trabajo y Educación Potenciados por I.A. + Evidencia de Habilidad Excepcional sobre Blockchain 
          </div>
        </div>
        
        {/* body */}
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            {/* <div className="col-12 my-4"> */}
            {/* <div className="col-12"> */}
            <div>
                {/* <div>
                    <a href="https://lanzatunombrealespacio.gophora.com/" target="_blank" rel="noopener noreferrer" className="row text-primary justify-content-center hashtag pt-2">
                      #gophoralanzatunombrealespacio
                    </a>
                </div>   */}

                {/* <button type='button' className='btn btn-outline-primary py-xxl-4 py-xl-4 py-lg-5'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScgc5Gtzrs3qHjWa4qDgfyAQtabUO1jBVG6IGq0qPWroXACmA/viewform" target="_blank" rel="noopener noreferrer" className=" text-light justify-content-center hashtag pt-2" style={{ textDecoration: 'none' }}>
                      ¡Quiero ser parte de GOPHORA STARSHIP!
                    </a>
                </button>           */}
                <div className="row">
                  {/* <div className="col-6 p-0 d-flex justify-content-end">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiOc65tu-f_UIUUa00lV8cz3CouQ7gRVeaWh_R52McyPvgXw/viewform" target='_blank' rel='nooppener noreferrer'>
                      <img src={luna} alt="Plan luna" className="img-fluid img-button"/>
                    </a>
                  </div> */}
                  {/* <div className="col-4 p-0">
                    <img src={tierra} alt="Plan tierra" className="img-fluid"/>
                  </div> */}
                  <div className="col-6 p-0 d-flex justify-content-start">
                    {/* <Link to="/comprar">
                      <img src={marte} alt="Plan marte" className="img-fluid img-button"/>
                    </Link> */}
                  </div>
                </div>
                <div className="row mb-1">
                  {/* <div className="col-lg-1 col-md-0"></div> */}
                  {/* <div className="col-lg-4 col-md-12 bitacora-custom py-2 px-0 d-flex flex-column align-items-center justify-content-center">
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
                  </div> */}
                  {/* <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center px-0">
                    <Link to="/comprar">
                      <button type="button" className="btn btn-outline-warning button-custom-marte py-xxl-4 py-xl-4 py-lg-5">Comprar <br/>MARTE ID NFT</button>
                    </Link>
                  </div> */}
                  {/* <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center justify-content-lg-start px-0">
                    <Link to="/mintear">
                      <button type="button" className="btn btn-outline-warning button-custom-marte btn-custom py-xxl-5 py-xl-5 py-lg-5">MINTEAR<br/>NFT</button>
                    </Link>
                  </div> */}
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center p-0">
              {/* <img src={criptopurrs} alt="Criptopurrs" className="img-full-height"/> */}
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src="https://www.youtube.com/embed/naBS-GcqSs8?si=CnG4XG-exXW8X62M"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className='container my-5'>
          <div className="row d-flex justify-content-center align-items-center">
            <div className='col-12 col-md-6'>
              <div className="text-center">
                <img src={team} alt="Our team" className="img-fluid"/>
              </div>
              <div className="dropdown-center d-flex justify-content-center align-items-center m-3">
                  <button className="btn btn-outline-warning button-custom-marte dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <h4>
                        DOCUMENTACIÓN DE LA STARTUP
                      </h4>
                  </button>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="https://drive.google.com/file/d/1Mu2ouE28fEtFczIxXSZmro4KzRAKY3uS/view?usp=sharing" target="_blank" rel="noopener noreferrer">DOCUMENTO DE GOPHORA INC. 1</a></li>
                      <li><a className="dropdown-item" href="https://drive.google.com/file/d/1RXOL353iQVpkUSDE5x1aVS0Ujp8U4fqX/view?usp=sharing" target="_blank" rel="noopener noreferrer">DOCUMENTO DE GOPHORA INC. 2</a></li>
                      {/* <li><a className="dropdown-item" href="https://drive.google.com/file/d/1o30PIs1DyINSpyuluejHD5qgkQSJ4O66/view?usp=sharing" target="_blank" rel="noopener noreferrer">GOPHORA</a></li> */}
                  </ul>
              </div>
            </div>
            <div className='col-12 col-md-6'>
                <img src={logo} alt="gophora logo" className="img-fluid w-100"/>
                <div className='text-light font-class'>
                  GOPHORA INC. es una startup constituida en Florida USA, el 5 de Octubre de 2020 desde Santa Cruz de la Sierra, Bolivia, a través del programa virtual del Founder Institute de Silicon Valley.

                  <br/> Compartimos Network con startups como Uber, AirBNB, Udemy. Tenemos acceso a apoyo de Instituciones aliadas del <a href="https://fi.co/" target="_blank" rel="noopener noreferrer"><span className="text-warning">FI</span></a> como la Estación Espacial Internacional y SpaceX.

                  <br/>Andrea Covarrubias (Visnity) cansada de la falta de oportunidades disponibles para la acción inmediata e inversión de esfuerzo y recursos para la distribución personalizada de información, servicios, productos, etc. tomó la responsabilidad de construir la herramienta que provea esta percepción extendida de las posibilidades para ayudar a personas que están sujetas a situaciones de estrés, que detiene su crecimiento y contribución, 

                  <br/>Visnity es hasta ahora la primera Fundadora Boliviana en lograr graduar a su startup en el FI con una beca del 100%.

                  <br/>En 2022 - 2023 GOPHORA comienza a construir su herramienta sobre Blockchain para entregar llaves digitales de acceso a GOPHORA STARSHIP y conseguir trazabilidad de las contribuciones.

                  <br/>En 2024 integrará Inteligencia Artificial para personalizar las experiencias y horizontes de los holders de los NFTs CRIPTOPURRS MARTE ID y CRIPTOPURRS EA.

                  <br/>“Desarrollamos el GESTOR DE OPORTUNIDAD Y PERCEPCIÓN HUMANA ONLINE nuestra misión es rescatar el talento y la contribución humana para dirigirlos a la exploración del espacio.” -Visnity

                  <br/>Todos somos importantes para lograr ser sustentables y sostenibles en nuevos horizontes, es hora de SER HUMANOS y permitirnos explorar y crecer y que mejor mientras contribuimos con proyectos tan emocionantes como la colonización de Marte.
                </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid mx-5" style={{ height: "900px", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", objectFit: "cover"}}> */}
        <div className="container-fluid p-5">
          <div className="row h-100">
            <div className="col-12 col-md-4">
              <img src={gophora} alt="Our team" className="img-fluid"/>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img src={backgroundImage} alt="Our team" className="img-fluid"/>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center font-class">
                <h1 className="text-light mb-5">Holders: 250 </h1>
                <a href="https://drive.google.com/file/d/1Mu2ouE28fEtFczIxXSZmro4KzRAKY3uS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-warning">Unirme Ahora</h3>
                </a>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen