import planes from "../assets/planes.png";
function ProximamenteScreen() {
  return (
    <section className="home-section">
        <div className="container font-class ">
            <div className="row">
                <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center p-3">
                    <h1 className="text-warning text-start p-3">
                        MARKETPLACE DE NFTs de TRIPLE IMPACTO
                    </h1>
                    <p className="text-light p-3">Dirigido a empresas que tengan programas de resposabilidad social empresariial y a consumidores que deseen apoyar proyectos que recuperan recursoa naturales mientras obtienen beneficios y más productos. Son NFTs personalizados que se venden a traves de GOPHORA para que los ususarios consumidores puedan acceder a beneficios unicos y más productos por cada bono comprado, estos bonos son de 1 solo uso para el consumidor, y pueden quemarse al intercambiarse por productos o servicios de las empresas afiliadas EL 50% de lo recaudado para GOPHORA por cada BONO NFT TRIPLE IMPACTO se destina a proyectos que mitigan la huella de carbono en el planeta y aseguran un futuro prospero para nuestros hijos. Los proyectos beneficiados por los Bonos TRIPLE IMPACTO son publicados sobre la blockchain de Poligon con trazabilidad de todos los recursos invertidos asi como las certificaciones de los resultados obtenidos</p>
                    <img src={planes} alt="planes" className="img-fluid p-3"/>
                    <a href="" className="text-secondary p-3">
                        Ver Catalogo de Productos y Servicios para canje de Bonos Triple Impacto
                    </a>
                    <a href="https://carbontrade-nine.vercel.app/marketplace" target="_blank" rel="noopener noreferrer" className="text-lightp p-3">
                        <button type="button" className="btn btn-outline-warning button-custom-marte">COMPRAR</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProximamenteScreen