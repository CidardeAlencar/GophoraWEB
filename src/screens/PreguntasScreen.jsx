import { useState } from 'react';
function PreguntasScreen() {
  const [isSectionVisible, setSectionVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setSectionVisibility(!isSectionVisible);
  };
  return (
    <section className="home-section font-class font-sizesm my-5" id="preguntas">
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-warning mb-5 desplegar" onClick={handleToggleVisibility}>Preguntas Frecuentes</h1>
            {isSectionVisible && (
            <div>

            <h3 className="text-warning mb-3 desplegar">¿Quiénes somos?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué es y que contiene el QR que enviamos al espacio el 11.11.23?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Cuál es la visión Macro de GOPHORA?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué son los GOPHORA NFT COLLECTIBLES?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué significa ser Holder de uno de los NFT´s de GOPHORA?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué son los Criptopurrs?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué utilidad tiene el NFT MARTE ID?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué utilidad tiene el NFT CRIPTOPURR EA?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Cómo puedo comprar uno de los NFTs de GOPHORA?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Qué es la GOPHORA STARSHIP?</h3>
            <h3 className="text-warning mb-3 desplegar">¿En cuántos países estará disponible la herramienta GOPHORA STARSHIP?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Cuál es la ventaja de comprar AHORA un GOPHORA NFT COLLECTIBLE?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Cómo se holdean o guardan los NFTs de GOPHORA?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Cómo puedo formar parte del proyecto?</h3>
            <h3 className="text-warning mb-3 desplegar">¿Cómo invertir en GOPHORA?</h3>
                            
            </div>
            )}
        </div>
    </section>

  )
}

export default PreguntasScreen