// import { Link } from 'react-router-dom';
// import backgroundImage from "../assets/GOPHORASTARSHIPBUTTON3.png";
import firstPage from "../assets/firstPage.png";
import firstPage1 from "../assets/firstPage1.png";
import firstPage2 from "../assets/firstPage2.png";
import qr from "../assets/qr.png";
// import qrglobe from "../assets/qrglobe.png";
// import qrandglobe from "../assets/qrandglobe.png";
// import criptopurrs from "../assets/criptopurrs1.png";
// import luna from "../assets/NFT LUNA.png";
// import tierra from "../assets/NFT TIERRA.png";
// import marte from "../assets/NFT MARTE.png";
// import logo from "../assets/logo.png";
// import team from "../assets/team1.png";
// import gophora from "../assets/GOPHORASTARSHIP2.png";
import { useEffect, useRef } from 'react';
function HomeScreen() {
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const image1 = image1Ref.current;
      const image2 = image2Ref.current;
      const image3 = image3Ref.current;

      if (image1 && image2 && image3) {
        const top1 = image1.getBoundingClientRect().top;
        const top2 = image2.getBoundingClientRect().top;
        const top3 = image3.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top1 < windowHeight * 0.75) {
          image1.classList.add('appear');
        }

        if (top2 < windowHeight * 0.75) {
          image2.classList.add('appear');
        }

        if (top3 < windowHeight * 0.75) {
          image3.classList.add('appear');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <section className="home-section">
        <div className="container-fluid d-flex flex-column justify-content-center p-0">
          {/* <div className="text-center">
            <div className="line-custom py-1">
              EXPANDIMOS LOS HORIZONTES DE LO POSIBLE, Conectamos toda voluntad con la Exploración Espacial
            </div>
            <div className="line-custom2 py-1">
              Horizontes Personalizados de Experiencia, Trabajo y Educación Potenciados por I.A. + Evidencia de Habilidad Excepcional sobre Blockchain 
            </div>
          </div> */}
        
        {/* body */}
          
        {/* body primera parte */}
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center ">
          <img ref={image1Ref} src={firstPage1} alt="Our team" className="first-page-image d-md-none py-4"/>
          <img ref={image2Ref} src={firstPage2} alt="Our team" className="first-page-image d-md-none"/>
          <img ref={image3Ref} src={firstPage} alt="Our team" className="first-page-image d-none d-md-block"/>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="font-class text-light first-page-text pt-5">Nuestras membresías incluyen una <span className="text-warning">llave digital</span> de acceso a la
              GOPHORA STARSHIP. ¡El PREEMBARQUE está abierto!
            </p>
            <img src={qr} alt="Our team" className="img-fluid" style={{maxWidth:'100px'}}/>
          </div>
        </div>
        {/* body segunda parte */}
        {/* <div className="container d-flex flex-column align-items-center justify-content-center p-5">
              <img src={qr} alt="Our team" className="img-fluid d-md-none"/>
              <img src={qrglobe} alt="Our team" className="img-fluid d-md-none"/>
              <img src={qrandglobe} alt="Our team" className="img-fluid d-none d-md-block"/>
        </div> */}

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
                  src="https://drive.google.com/file/d/1geiLfvac36_PAKVqskkZQ5WI19d2Lnc6/preview"
                  title="Google Drive video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='container my-5'>
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
        </div> */}
        {/* <div className="container-fluid mx-5" style={{ height: "900px", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", objectFit: "cover"}}> */}
        {/* <div className="container-fluid p-5">
          <div className="row h-100">
            <div className="col-12 col-md-4">
              <img src={gophora} alt="Our team" className="img-fluid"/>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img src={backgroundImage} alt="Our team" className="img-fluid"/>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center font-class">
                <h1 className="text-light mb-5">Holders: 250 </h1>
                <a href="https://forms.gle/vwzrF3Fxe3Lb7RnC9" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-warning">Unirme Ahora</h3>
                </a>
                
            </div>
          </div>
        </div> */}
        {/* <div className="container">
          <p className="text-light text-justify font-class">La misión de la herramienta GOPHORA STARSHIP es entregar horizontes personalizados a sus tripulantes en trabajo, educación y experiencias Hobbies que desde la vida diaria desarrollen su potencial de contribución y legado en la exploración espacial.
          <br/>Todos son importantes para lograr ser sustentables y sostenibles en nuevos horizontes,, GOPHORA rescata el talento y la voluntad humana y la conecta con la exploración de nuevos horizontes.
          <br/>GOPHORA INC. es una startup constituida en Florida USA, el 5 de Octubre de 2020 desde Bolivia, a través del programa Founder Institute de Silicon Valley.
          <br/>Compartimos Network con startups como Uber, AirBNB, Udemy. Tenemos acceso a apoyo de Instituciones aliadas del FI como la Estación Espacial Internacional entre otras que están construyendo nuestro camino hacia la exploración de Marte y el espacio.
          <br/>Visnity es hasta ahora la primera Fundadora Boliviana en lograr este hito.
          <br/>En 2023 GOPHORA comienza a construirse sobre Blockchain para entregar las llaves digitales GOPHORA de acceso a GOPHORA STARSHIP.
          <br/><br/>“Desarrollamos el GESTOR DE OPORTUNIDAD Y PERCEPCIÓN HUMANA ONLINE nuestra misión es rescatar el talento y la contribución humana para dirigirlos a la exploración del espacio.” 
          </p>
        </div> */}
        
      </div>
    </section>
  )
}

export default HomeScreen