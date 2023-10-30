import marte from "../assets/marteIDNFT.png";

function ComprarScreen() {
  return (
    <section className="home-section">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <form className="row g-3">
                  <div className="col-12">
                    <h1 className="text-warning">MARTE ID NFT</h1>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputNombres" className="form-label text-warning">Nombres<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control" id="inputNombres" placeholder="Cidar Andres"/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputApellidos" className="form-label text-warning">Apellidos<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control" id="inputApellidos" placeholder="de Alencar Calle"/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label text-warning">E-mail<span className="text-danger"> *</span></label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="cidarandresdac@gmail.com"/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputWhatsapp" className="form-label text-warning">Whatsapp<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control" id="inputWhatsapp" placeholder="79564422"/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputCiudad" className="form-label text-warning">Ciudad</label>
                    <select id="inputCiudad" className="form-select">
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
                    <input type="calendar" className="form-control" id="inputCumple"/>
                  </div>
                  
                  <div className="col-md-12">
                    <label htmlFor="inputNacionalidad" className="form-label text-warning">Nacionalidad</label>
                    <input type="text" className="form-control" id="inputNacionalidad"/>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label text-light" htmlFor="gridCheck">
                        Acepto los Terminos y Condiciones del servicio de Horizontes Personalizados en GOPHORA y quiero que mi nombre sea parte de la Lista QR que va al espacio el 11.11.23
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-warning fw-bold">Pagar con QR</button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center">
                <img src={marte} alt="NFTmarte" className="img-fluid" />
              </div>

            </div>

        </div>
    </section>
  )
}

export default ComprarScreen