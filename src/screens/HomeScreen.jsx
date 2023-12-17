// import { Link } from 'react-router-dom';
// import backgroundImage from "../assets/planetaBackground.png";
// import criptopurrs from "../assets/criptopurrs1.png";
// import luna from "../assets/NFT LUNA.png";
// import tierra from "../assets/NFT TIERRA.png";
// import marte from "../assets/NFT MARTE.png";
// import team from "../assets/team1.png";
import gophora from "../assets/GOPHORASTARSHIP2.png";
import sign from "../assets/Visnity.png";
function HomeScreen() {
  return (
    // <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <section className="home-section">
      <div className="container-fluid d-flex flex-column justify-content-center p-0">
        {/* <div className="line-custom py-1">
          EXPANDIMOS LOS HORIZONTES DE LO POSIBLE, Conectamos toda voluntad con la Exploración Espacial
        </div>
        <div className="line-custom2 py-1">
          Horizontes Personalizados de Experiencia, Trabajo y Educación Potenciados por I.A. + Evidencia de Habilidad Excepcional sobre Blockchain 
        </div> */}
        <div className="text-center">
          <img src={gophora} alt="gophora startship" className="img-fluid" />
        </div>
        
        <div className="container">
          <div className="text-left line-custom3">
            <h3>Expandimos los horizontes de lo Posible.</h3>
          </div>
          <div className="text-light text-left font-class">
            <p>La misión de la herramienta GOPHORA STARSHIP es entregar horizontes personalizados a sus tripulantes en trabajo, educación y experiencias Hobbies que desde la vida diaria desarrollen su potencial de contribución y legado en la exploración espacial.</p>

            <p>Todos son importantes para lograr ser sustentables y sostenibles en nuevos horizontes, GOPHORA rescata el talento y la voluntad humana y la conecta con la exploración de nuevos horizontes.</p>

            <p>GOPHORA INC. es una startup constituida en Florida USA, el 5 de Octubre de 2020 desde Bolivia, a través del programa Founder Institute de Silicon Valley.</p>

            <p>Compartimos Network con startups como Uber, AirBNB, Udemy. Tenemos acceso a apoyo de Instituciones aliadas del FI como la Estación Espacial Internacional entre otras que están construyendo nuestro camino hacia la exploración de Marte y el espacio.</p>

            <p>Visnity es hasta ahora la primera Fundadora Boliviana en lograr este hito.</p>

            <p>En 2023 GOPHORA comienza a construirse sobre Blockchain para entregar las llaves digitales GOPHORA de acceso a GOPHORA STARSHIP.</p>

            <br/><p>“Desarrollamos el GESTOR DE OPORTUNIDAD Y PERCEPCIÓN HUMANA ONLINE nuestra misión es rescatar el talento y la contribución humana para dirigirlos a la exploración del espacio.”</p>
          </div>
          <div className="row mb-5">
            <div className="col-6"></div>
            <div className="col-6 text-left p-0">
              <img src={sign} alt="Visnity" className="img-fluid" />
            </div>
          </div>
        </div>
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