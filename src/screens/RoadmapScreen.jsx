
import check from "../assets/check.png";
// import backgroundImage from "../assets/ROADMAP.png";
function RoadmapScreen() {
  return (
    <section className="home-section font-class font-sizesm my-5">
    {/* <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="container d-flex flex-column align-items-center">
        {/* <div className="row">
          <div className="col-6 col-md-5 d-flex flex-column align-items-center">
            <h1 className="text-warning space">ROADMAP</h1>
            <i className="bi bi-2-circle-fill text-warning fs-1"></i>
            <p className="text-light space text-sm">Diseñamos, y lanzamos sobre blockchain el primer drop de NFTs de <span className="text-warning">GOPHORA NFT COLLECTIBLES : MARTE. ID</span> son tickets de acceso con beneficios de capacitación temprana y uso para los primeros exploradores en GOPHORA.</p>
            <i className="bi bi-4-circle-fill text-warning fs-1"></i>
            <p className="text-light space">Subida del <span className="text-warning">QR a la blockchain de poligon</span> y constante actualización de los nuevos usuarios  NFT MARTE 11.11.23</p>
            <i className="bi bi-6-circle-fill text-warning fs-1"></i>
            <p className="text-light mb-5">Lanzamiento ecosistema comercial sustentable GOPHORA Marketplace de <span className="text-warning">NFTs Triple Impacto</span> de industrias de productos de consumo masivo.</p>
            <i className="bi bi-8-circle-fill text-warning fs-1"></i>
            <p className="text-light">Horizontes de Exploración:Trabajo, Experiencias , Capacitación</p>
          </div>
          <div className="col-12 col-md-2 d-none d-md-flex justify-content-center align-items-center ">
            <img src={middle} alt="roadmap" className="img-fluid home-section"/>
          </div>
          <div className="col-6 col-md-5 d-flex flex-column align-items-center">
            <i className="bi bi-1-circle-fill text-warning fs-1"></i>
            <p className="text-light">GOPHORA INC. nace el 05 de Octubre de 2020 en el FI, Silicon Valley, buscando convertirse en la Startup que consiga rescartar todo el talento, trabajo y experiencia humana para dirigirlo hacia la exploración espacial, sus Fundadores buscan entregar el servicio de I.A. definitivo en horizontes personalizados de trabajo, experiencia y educación mientras estos trascienden y tienen visibilidad para aportar en misiones de exploración de nuevos horizontes.</p>
            <i className="bi bi-3-circle-fill text-warning fs-1"></i>
            <p className="text-light">En GOPHORA EXPANDIMOS LO POSIBLE es por eso que decidimos <span className="text-warning">lanzar un QR al espacio</span> con una lista de los primeros usuarios y exploradores de GOPHORA, actividad que se llevará a cabo el 11.11.23 en la estación terrrestre de la ABE en colaboración con Boing, y Energea.. </p>
            <i className="bi bi-5-circle-fill text-warning fs-1"></i>
            <p className="text-light mb-5">Lanzamiento del <span className="text-warning">2do, drop de GOPHORA NFT COLLECTIBLES: CRIPTOPURRS 1900 NFTS Exclusivos</span> con beneficios de por vida en el ecosistema GOPHORA ( plataforma, app, Metaverso) precio de minteo 0.05 ETH</p>
            <i className="bi bi-7-circle-fill text-warning fs-1"></i>
            <p className="text-light">Lanzamiento de interacciones de usuarios con la <span className="text-warning">IA de GOPHORA</span></p>
            <i className="bi bi-9-circle-fill text-warning fs-1"></i>
            <p className="text-light"><span className="text-warning">Conección de contribuciones</span> con compañias involucradas en la exploración espacial.</p>
          </div>
        </div>
      </div> */}
      <h1 className="text-warning mb-5">ROADMAP</h1>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4 text-center">
            <h3 className="text-warning">Objetivo:</h3>
          </div>
          <div className="col-8">
            <p className="text-light text-center"><span className="text-warning">Entregar a la sociedad una herramienta que nos conecte a todos con la exploración espacial</span> y registre la contribución y habilidad excepcional de cada usuario.</p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4 text-center">
            <img src={check} alt="check icon" className="fluid"/>
          </div>
          <div className="col-8">
            <p className="text-light text-center">GOPHORA INC. nace el 05 de Octubre de 2020 en el FI, Silicon Valley, buscando convertirse en la Startup que consiga rescatar todo el talento, trabajo y experiencia humana para dirigirlo hacia la exploración espacial, sus Fundadores buscan entregar el servicio de I.A. de streaming de oportunidades personalizadas de trabajo, hobbies y educación.</p>
            <p className="text-light text-center">“Entregamos libertad a todos nuestros usuarios para explorar, crecer y contribuir desde donde están y lo que hacen con la exploración del espacio.” <span className="text-warning">- Visnity</span></p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4 text-center">
            <img src={check} alt="check icon" className="fluid" />
          </div>
          <div className="col-8">
            <p className="text-light text-center">Minteo en Red Poligon de nuestros primeros NFTs de acceso: <span className="text-warning">CRIPTOPURRS EA</span> y <span className="text-warning">CRIPTOPURRS MARTE ID</span> como llaves digitales para los holders, acceso al nivel 1, 2, 3 y 4 de la GOPHORA, con beneficios de por vida en el ecosistema de GOPHORA.</p>
            <p style={{ color: '#EA25D6' }}>Suministro total para Bolivia: 300.000</p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4 text-center">
            <img src={check} alt="check icon" className="fluid" />
          </div>
          <div className="col-8">
            <p className="text-light text-center"><span className="text-warning">Lanzamiento de un QR</span> con la lista de los GOPHORA NFT holders, ahora tripulantes de la GOPHORA STARSHIP al espacio  11.11.23 Estación Terrestre Agencia Boliviana Espacial.</p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4 text-center">
            <img src={check} alt="check icon" className="fluid" />
          </div>
          <div className="col-8">
            <p className="text-light text-center"><span className="text-warning">PRE-EMBARQUE GOPHORA STARSHIP</span> para la creciente comunidad de Holders y emisión de primeras experiencias en <span className="text-warning">concierge MVP.</span></p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center"><span className="text-warning">EMBARQUE GOPHORA STARSHIP</span> para Emisores de Experiencias en trabajo, educación y hobbies <span className="text-warning">concierge MVP.</span></p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p style={{ color: '#D5CEFF' }} className="text-center">10.000 GOPHORA NFT Holders.</p>
            <p className="text-light text-center"> Lanzamiento GOPHORA <span className="text-warning">1er y 2do nivel de experiencia</span> en GOPHORA STARSHIP</p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center">60.000 GOPHORA NFT COLLECTIBLES Holders. Lanzamiento GOPHORA I.A. <span className="text-warning"> INTELIGENCIA ARTIFICIAL para 3er y 4to nivel de experiencia</span> en GOPHORA STARSHIP.</p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center">100.000 GOPHORA NFT COLLECTIBLES Holders. <span className="text-warning">GOPHORA en REALIDAD AUMENTADA.</span></p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center">Lanzamiento del catálogo de <span className="text-warning">accesorios para una experiencia inmersiva</span> de GOPHORA</p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center">300.000 GOPHORA NFT COLLECTIBLES Holders. <span className="text-warning">METAVERSO GOPHORA en REALIDAD VIRTUAL</span> </p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center">Acceso a niveles de experiencia GOPHORA A NO HOLDERS POR <span className="text-warning">SUSCRIPCIÓN.</span></p>
          </div>
      </div>
      <div className="row d-flex align-items-center mb-5">
          <div className="col-4"></div>
          <div className="col-8">
            <p className="text-light text-center">Escalar y expandir la solución GOPHORA STARSHIP a paises de Latinoamérica, Norte América, Europa y África. </p>
          </div>
      </div>
    </div>

    </section>
  )
}

export default RoadmapScreen