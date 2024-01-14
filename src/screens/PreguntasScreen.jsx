import { useState } from 'react';
import gophoraTeam from "../assets/gophoraTeam.png";
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

            <h3 className="text-warning mb-3 desplegar" onClick={handleToggleVisibility}>¿Quiénes somos?</h3>
            {isSectionVisible && (
            <div className='d-flex flex-column mb-5 text-light'>
                <p>Bienvenidos a GOPHORA INC., una innovadora startup con base en Florida, EE. UU., fundada el 5 de Octubre de 2020 en Santa Cruz de la Sierra, Bolivia, a través del distinguido programa virtual del Founder Institute de Silicon Valley.</p>
                <p>En nuestra travesía, nos hemos codeado con gigantes del emprendimiento como Uber, AirBNB y Udemy, y contamos con el respaldo de instituciones de renombre como la Estación Espacial Internacional y SpaceX, gracias a nuestra afiliación con el FI.</p>
                <p>La génesis de GOPHORA surge de la visión de Visnity, una líder visionaria que, agotada por la falta de oportunidades inmediatas y la subutilización de esfuerzos y recursos en la distribución personalizada de información y servicios, decidió cambiar el paradigma y lanzar desde Latinoamérica la primera compañía enfocada en la contribución colectiva con la exploración del espacio.</p>
                <p>Consciente de que esta carencia perpetúa la pérdida de talento humano, Visnity inició la construcción de una herramienta revolucionaria. Nuestra misión es clara: rescatar el talento y la contribución humanos, empoderando a aquellos que enfrentan situaciones de estrés económico.</p>
                <p>Visnity y su equipo se enorgullecen de ser los primeros fundadores bolivianos en graduarse en el FI con una beca del 100%, un hito que marca el comienzo de nuestra travesía hacia GOPHORA.</p>
                <p>En el año 2023, GOPHORA da un paso audaz al embarcarse en la construcción de su herramienta sobre tecnología Blockchain. Esto permitirá la entrega de llaves digitales de acceso a GOPHORA STARSHIP y garantizará la trazabilidad de las contribuciones</p>
                <p>Para el 2024, incorporaremos la Inteligencia Artificial para personalizar aún más las experiencias y horizontes de los poseedores de los NFTs CRIPTOPURRS MARTE ID y CRIPTOPURRS EA. así como de los suscriptores de la GOPHORA STARSHIP.</p>
                <p>El corazón de nuestra visión es el GESTOR DE OPORTUNIDAD Y PERCEPCIÓN HUMANA ONLINE.  Buscamos proporcionar un servicio de inteligencia artificial presentado en realidad aumentada y realidad virtual para streaming de oportunidades personalizadas de trabajo, hobbies y educación.</p>
                <p>Queremos liberar el potencial de cada individuo, permitiéndoles explorar, crecer y contribuir desde donde se encuentren a la exploración espacial.</p>
                <p>Es el momento de abrazar nuestra humanidad, explorar, crecer y todo mientras contribuimos a proyectos tan emocionantes como la colonización de Marte.</p>
                <p>— Visnity, Fundadora de GOPHORA INC.</p>
                <img src={gophoraTeam} alt="gophora team" className='img-fluid'  />
            </div>
            )}
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