import marte from "../assets/marteIDNFT.png";
import backgroundImageN from "../assets/GOPHORASTARSHIPBACKGROUND.png";

function ComprarScreen() {
  return (
    <section className="home-section font-class d-flex align-items-center">
        <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6"style={{ backgroundImage: `url(${backgroundImageN}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
                <form className="row g-3">
                  <div className="col-12">
                    <h1 className="text-warning text-center">MARTE ID NFT</h1>
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
                    <label htmlFor="inputWhatsapp" className="form-label text-warning">Whatsapp<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputWhatsapp" placeholder="79564422" required pattern="[0-9]*"/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputCiudad" className="form-label text-warning">Ciudad</label>
                    <select id="inputCiudad" className="form-select textfield-form">
                      <option selected>La Paz</option>
                      <option>Santa Cruz</option>
                      <option>Cochabamba</option>
                      <option>Sucre</option>
                      <option>Potosi</option>
                      <option>Tarija</option>
                      <option>Pando</option>
                      <option>Beni</option>
                      <option>Oruro</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputCumple" className="form-label text-warning">Cumpleaños</label>
                    <input type="date" className="form-control textfield-form" id="inputCumple"/>
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="inputNacionalidad" className="form-label text-warning">Nacionalidad</label>
                    <input type="text" className="form-control textfield-form" id="inputNacionalidad"/>
                  </div>
                  <p className="text-light"><span className="text-warning">Total a Pagar:</span> 7 USD <span className="text-warning">|</span> Son Siete Dólares 00/100</p>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                      <label className="form-check-label text-light" htmlFor="gridCheck">
                        Acepto los <a href="" className="text-warning">Terminos y Condiciones</a> del servicio de Horizontes Personalizados en GOPHORA y quiero que mi nombre sea parte de la <a href="https://lanzatunombrealespacio.gophora.com/" target="_blank" rel="noopener noreferrer" className="text-warning">Lista QR</a> que va al espacio el 11.11.23
                      </label>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    {/* <a href="https://www.paypal.com/bo/home" target="_blank" rel="noopener noreferrer" > */}
                      <button type="submit" className="btn btn-outline-warning button-custom-marte">Pagar con PayPal</button>
                    {/* </a> */}
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <img src={marte} alt="NFTmarte" className="img-fluid" />
              </div>

            </div>

        </div>
    </section>
  )
}

export default ComprarScreen