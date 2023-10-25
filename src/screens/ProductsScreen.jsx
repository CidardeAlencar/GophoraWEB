import NavarComponent from "../components/navarComponent"
import vector from "../assets/vector.png";
import background2 from "../assets/backGround2.png";
import planes from "../assets/planes.png";
import FooterComponent from "../components/FooterComponent";
function ProductsScreen() {
  return (
    <>
    <NavarComponent/>
    <section className="home-section" style={{ backgroundImage: `url(${background2})` }}>
        <div className="container">
            <h1 className="text-warning">Productos</h1>
            <div className="row">
                <div className="col-6">
                    <div className="text-light">
                        <span className="text-warning">NFT</span> COLLECTIBLES <span className="text-warning">: MARTE ID</span>
                    </div>
                    <p className="text-light">Dirigido a Early Adopters es un ID de acceso y ticket de acceso a eventos y capacitación de GOPHORA de uso personal.</p>
                    <a href="#" className="text-light">
                        <span className="text-warning">COMPR</span>AR
                    </a>
                    <img src={vector} alt="vector de seleccion de boton" className="img-fluid" />
                </div>
                <div className="col-6 d-flex flex-column align-items-start">
                    <div className="text-light">
                        <span className="text-warning">NFT</span> COLLECTIBLES <span className="text-warning">: CRIPTOPURRS</span> <span className="text-secondary">Pronto en OpenSea</span>
                    </div>
                    <p className="text-light">Dirigido a Inversionistas es un activo digital con acceso premium y beneficios dentro del ecosistema GOPHORA es de multiples usos, inclusive puede alquilarse o venderse según especulación en el futuro.</p>
                    <a href="#" className="text-light">
                        <span className="text-warning">COMPR</span>AR
                    </a>
                    <img src={vector} alt="vector de seleccion de boton" className="img-fluid"/>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="text-warning">
                        MARKETPLACE DE NFTs de TRIPLE IMPACTO
                    </div>
                    <p className="text-light">Dirigido a empresas que tengan programas de resposabilidad social empresariial y a consumidores que deseen apoyar proyectos que recuperan recursoa naturales mientras obtienen beneficios y más productos. Son NFTs personalizados que se venden a traves de GOPHORA para que los ususarios consumidores puedan acceder a beneficios unicos y más productos por cada bono comprado, estos bonos son de 1 solo uso para el consumidor, y pueden quemarse al intercambiarse por productos o servicios de las empresas afiliadas EL 50% de lo recaudado para GOPHORA por cada BONO NFT TRIPLE IMPACTO se destina a proyectos que mitigan la huella de carbono en el planeta y aseguran un futuro prospero para nuestros hijos. Los proyectos beneficiados por los Bonos TRIPLE IMPACTO son publicados sobre la blockchain de Poligon con trazabilidad de todos los recursos invertidos asi como las certificaciones de los resultados obtenidos</p>
                    <img src={planes} alt="planes" className="img-fluid"/>
                    <a href="" className="text-secondary">
                        Ver Catalogo de Productos y Servicios para canje de Bonos Triple Impacto
                    </a>
                    <a href="#" className="text-light">
                        <span className="text-warning">COMPR</span>AR
                    </a>
                    <img src={vector} alt="vector de seleccion de boton" className="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    <FooterComponent></FooterComponent>
    </>
  )
}

export default ProductsScreen