// Hooks
import { useState } from 'react';
import axios from 'axios';
// Assets
import marte from "../assets/marteIDNFT.png";
import backgroundImageN from "../assets/GOPHORASTARSHIPBACKGROUND.png";
import paypal from "../assets/PayPal.png";
function ComprarScreen() {

  // Estado para rastrear los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ciudad: 'La Paz',
    fecha_nac: '',
    nacionalidad: '',
  });
  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Muestra los datos del formulario en la consola
    console.log(formData);
    
    // Define los encabezados personalizados que deseas enviar con la solicitud
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      //'Authorization': 'Bearer your-token', // Si necesitas autenticación
    };

    // Realiza la solicitud POST utilizando Axios
    axios.post('https://r3colectaback.herokuapp.com/gophora', formData,{headers})
      .then((response) => {
        // Maneja la respuesta exitosa, por ejemplo, muestra un mensaje de éxito
        console.log('Solicitud POST exitosa', response.data);

        // Redirige al usuario a la URL deseada después de una compra exitosa
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W6DND6DA6AT2U';

      })
      .catch((error) => {
        if (error.response) {
          // La solicitud se hizo y el servidor respondió con un código de estado diferente de 2xx.
          console.error('Error de respuesta:', error.response.data);
        } else if (error.request) {
          // La solicitud se hizo pero no se recibió ninguna respuesta.
          console.error('Error de red:', error.request);
        } else {
          // Ocurrió un error al configurar la solicitud o al procesarla.
          console.error('Error general:', error.message);
        }
      });
  };

  return (
    <section className="home-section font-class d-flex align-items-center">
        <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6"style={{ backgroundImage: `url(${backgroundImageN}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <h1 className="text-warning text-center">MARTE ID NFT</h1>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputNombres" className="form-label text-warning">Nombres<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputNombres" name="nombre" placeholder="Neil Alden" required onChange={handleInputChange}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputApellidos" className="form-label text-warning">Apellidos<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputApellidos" name="apellido" placeholder="Armstrong" required onChange={handleInputChange}/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label text-warning">E-mail<span className="text-danger"> *</span></label><br/>
                    <div className="input-group">
                        <input type="email" className="form-control textfield-form" id="inputEmail" name="email" placeholder="armstrong@gmail.com" required onChange={handleInputChange}/>
                        <span className="input-group-text textfield-form">
                            <i className="bi bi-envelope"></i>
                        </span>
                    </div>
                </div>
                  <div className="col-12">
                    <label htmlFor="inputWhatsapp" className="form-label text-warning">Whatsapp<span className="text-danger"> *</span></label>
                    <input type="text" className="form-control textfield-form" id="inputWhatsapp" name="telefono" placeholder="73007300" required pattern="[0-9]*" onChange={handleInputChange}/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputCiudad" className="form-label text-warning">Ciudad</label>
                    <select id="inputCiudad" className="form-select textfield-form" name="ciudad" onChange={handleInputChange}>
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
                    <input type="date" className="form-control textfield-form" id="inputCumple" name="fecha_nac" onChange={handleInputChange}/>
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="inputNacionalidad" className="form-label text-warning">Nacionalidad</label>
                    <input type="text" className="form-control textfield-form" id="inputNacionalidad" name="nacionalidad" onChange={handleInputChange}/>
                  </div>
                  <p className="text-light"><span className="text-warning">Total a Pagar:</span> 7 USD <span className="text-warning">|</span> Son Siete Dólares 00/100</p>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                      {/* <label className="form-check-label text-light" htmlFor="gridCheck">
                        Acepto los <a href="" className="text-warning">Terminos y Condiciones</a> del servicio de Horizontes Personalizados en GOPHORA y quiero que mi nombre sea parte de la <a href="https://lanzatunombrealespacio.gophora.com/" target="_blank" rel="noopener noreferrer" className="text-warning">Lista QR</a> que va al espacio el 11.11.23
                      </label> */}
                      <label className="form-check-label text-light" htmlFor="gridCheck">
                        Quiero que mi nombre sea parte de la <a href="https://lanzatunombrealespacio.gophora.com/" target="_blank" rel="noopener noreferrer" className="text-warning">Lista QR</a> que va al espacio el 11.11.23
                      </label>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center my-2">
                    {/* <a href="https://www.paypal.com/bo/home" target="_blank" rel="noopener noreferrer" > */}
                      <button type="submit" className="btn btn-outline-warning button-custom-marte">
                        Pagar con 
                        <img src={paypal} alt="paypal" className="img-fluid" />
                      </button>
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