
import middle from "../assets/MIDDLE.png";
// import backgroundImage from "../assets/ROADMAP.png";
function RoadmapScreen() {
  return (
    <section className="home-section font-class font-sizesm">
    {/* <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="container">
        <div className="row">
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
      </div>

    </section>
  )
}

export default RoadmapScreen