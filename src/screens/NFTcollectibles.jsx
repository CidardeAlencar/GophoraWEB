import nft1 from "../assets/nft1.png";
import bs from "../assets/bs.png";
import mt from "../assets/matic.png";
function NFTcollectibles() {
  return (
    <section id="nft" className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-light font-class p-5">
            <span className="text-warning">NFT </span> COLLECTIBLES
        </h1>
        <p className="text-light text-center font-class w-75 pb-5">
            *Obtén tu acceso directamente desde GOPHORA antes que se agote nuestro suministro limitado de NFTs para tu país y tengas que ir a OpenSea o adquirir un plan de pago por suscripción.” 
        </p>
        <h2 className="font-class text-warning">
          DISPONIBLES
        </h2>
        <div className="container d-flex justify-content-center">
          <div className="card m-3 card-nft text-light font-class rounded-5">
            <div className="row g-0">
              <h3 className="card-title text-warning text-center p-3">CRIPTOPURR MARTE ID NFT</h3>
              <div className="col-md-8 d-flex">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h4 className="card-text text-center p-3">200 ediciones x NFT</h4>
                  <ul className="">
                    <li>Acceso a GOPHORA STARSHIP niveles 1 y 2.</li>
                    <li>Nombre en QR modulo espacial.</li>
                    <li> 10% Descuento de por vida en accesorios GOPHORA.</li>
                    <li>Acceso a evento anual GOPHORA</li>
                  </ul>
                  <h5 className="card-title text-warning">PRECIO:</h5>
                  <p className="card-text">
                    <small>
                      50 Bolivianos 
                      <img src={bs} className="img-fluid" alt="moneda boliviana" style={{maxWidth:'50px'}}/>
                      <span className="text-warning"> o </span> 
                      10 MATIC
                      <img src={mt} className="img-fluid" alt="matic" style={{maxWidth:'50px'}}/>
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src={nft1} className="img-fluid rounded" alt="..."/>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default NFTcollectibles