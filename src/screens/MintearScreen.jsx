//import marte from "../assets/marteIDNFT.png";

import backgroundImageN from "../assets/GOPHORASTARSHIPBACKGROUND.png";
function MintearScreen() {
  return (
    <section className="home-section font-class d-flex align-items-center">
        <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pe-5"style={{ backgroundImage: `url(${backgroundImageN}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
                <form className="row">
                  <div className="col-12">
                    <h1 className="text-warning text-center">MINTEAR NFT</h1>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputNombres" className="form-label text-warning">Nombres<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputNombres" placeholder="Cidar Andres" required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputApellidos" className="form-label text-warning">Apellidos<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputApellidos" placeholder="de Alencar Calle" required/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label text-warning">E-mail<span className="text-danger"> *</span></label><br/>
                    <div className="input-group">
                        <input type="email" className="form-control textfield-form" id="inputEmail" placeholder="cidarandresdac@gmail.com" required/>
                        <span className="input-group-text textfield-form">
                            <i className="bi bi-envelope"></i>
                        </span>
                    </div>
                </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label text-warning">Address de metamask<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputAddress" placeholder="0x7a07890F20aacdFe8976aC9213442ef92E78bCce"/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputNumeroNFT" className="form-label text-warning">Número de NFT</label>
                    <input type="text" className="form-control textfield-form" id="inputNumeroNFT" pattern="[0-9]*"/>
                  </div>
                  <div className="col-12">
                    <label className="text-warning">Smart Contract MARTE ID NFT</label>
                  </div>
                  <div className="col-12 font-sizesm">
                    <p>
                      <a className="text-light" href="https://polygonscan.com/token/0x0ec054a9f23e660e9402f57d7aebedbe20c740d6#balances" target="_blank" rel="noreferrer noopener">0x0EC054a9f23e660E9402f57D7AEbedbe20c740d6</a>
                    </p>
                  </div>
                  <div className="col-12 my-5">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                      <label className="form-check-label text-light" htmlFor="gridCheck">
                        Confirmo que los datos proporcionados son correctos y acepto que mi NFT será enviado a mi wallet de Metamask tras la confirmación de compra en un periodo de 48 Horas.
                      </label>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    {/* <a href="https://www.paypal.com/bo/home" target="_blank" rel="noopener noreferrer" > */}
                      <button type="submit" className="btn btn-outline-warning button-custom-marte">MINTEAR MI MARTE ID</button>
                    {/* </a> */}
                  </div>
                </form>
              </div>
              <div className="ps-5 col-12 col-lg-6 d-flex align-items-center">
                <div className="col-12">
                  <iframe
                    className="custom-responsive-video"
                    src="https://www.youtube.com/embed/Afn0Szs5h5c?autoplay=1"
                    title="Video de YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>

        </div>
    </section>
  )
}

export default MintearScreen