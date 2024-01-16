import { useState } from 'react';
import gophoraTeam from "../assets/gophoraTeam.png";
import NFTdispo from "../assets/NFTdispo.png";
function PreguntasScreen() {
  const [expandedSections, setExpandedSections] = useState({});

  const handleToggleVisibility = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };
  return (
    <section className="home-section font-class font-sizesm my-5" id="preguntas">
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-warning mb-5 desplegar" onClick={() => handleToggleVisibility('preguntasFrecuentes')}>Preguntas Frecuentes</h1>
              {expandedSections['preguntasFrecuentes'] && (
              <div>
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('quienesSomos')}>¿Quiénes somos?</h3>
                  {expandedSections['quienesSomos'] && (
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
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta2')}>¿Qué es y que contiene el QR que enviamos al espacio el 11.11.23?</h3>
                  {expandedSections['pregunta2'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                        <p></p>El QR que subimos el 11.11.23 en un modulo que llevaba 5 experimentos al espacio es un reconocimiento a los holders de los GOPHORA NFT COLLECTIBLES, es un símbolo de que ellos ahora son parte de la siguiente generación de exploradores que colaboran desde 
                        <p></p>sus experiencias diarias a la exploración del espacio y apoyan la misión de ser sustentables en nuevos horizontes, es una lista de intrépidos innovadores que han apostado en el proyecto GOPHORA desde sus inicios y son oficialmente tripulantes de la GOPHORA STARSHIP, contiene los nombres de todos los Holders de los CRIPTOPURRS MARTE ID, CRIPTOPURRS EA y de la edición limitada LUNA que habilitamos para nuestra colaboración con la NASA para la hackathon SpaceApps del 2023.
                        <p></p>Ser parte de este QR es más que un honor; es ser oficialmente reconocido como tripulante de la GOPHORA STARSHIP. Un símbolo de que contribuyes, desde tu vida diaria, a la misión de ser sustentables en nuevos horizontes.
                        <p></p>Este QR se actualiza cada mes con los nuevos holders de los GOPHORA NFT COLLECTIBLES de forma continua y permanente,.
                        <p></p>Nuestro objetivo es reunir la comunidad de exploradores más grande antes registrada, con 100 millones de tripulantes de diferentes países, culturas, idiomas, edades y habilidades
                        <p></p>Es la primera vez en la historia en que todos los NO ASTRONAUTAS tenemos la oportunidad de acoplarnos desde nuestra vida diaria a la exploración espacial.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta3')}>¿Cuál es la visión Macro de GOPHORA?</h3>
                  {expandedSections['pregunta3'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>En GOPHORA, creamos un futuro donde la exploración se convierte en una experiencia única y personalizada para cada individuo.
                      <p></p>Nuestra visión macro es trascender los límites convencionales de la exploración espacial, Haciendo parte a todos los Tripulantes de la GOPHORA STARSHIP, impulsados por la idea de que la personalización de oportunidades es la clave para desbloquear nuevos horizontes.
                      <p></p>Imaginamos un mundo donde cada persona tiene la oportunidad de personalizar su viaje hacia su mayor contribución que puede ser importante para la actual exploración espacial. 
                      <p></p>GOPHORA STARSHIP, no solo es una nave espacial virtual ; se trata de una experiencia única y personalizada que refleja la individualidad de cada explorador.
                      <p></p>Utiliza la tecnología de NFTs (Tokens No Fungibles) para dividir la GOPHORA STARSHIP en accesos a las experiencias de trabajo, educación y hobbies. 
                      <p></p>Los CriptoPurrs, nuestros NFTs exclusivos, ofrecen a los usuarios la propiedad y el acceso a la nave en los niveles 1,2,3 y 4 de acuerdo con sus preferencias y aspiraciones.
                      <p></p>Con el lanzamiento de CriptoPurrs Marte ID, CriptoPurrs Early Adopters y CriptoPurrs Investor, invitamos a aquellos que buscan ser pioneros en la próxima generación de exploradores. 
                      <p></p>GOPHORA no solo es una plataforma; es un movimiento que a los holders y tripulantes nos define cómo exploradores. 
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta4')}>¿Qué son los GOPHORA NFT COLLECTIBLES?</h3>
                  {expandedSections['pregunta4'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                        <p></p>Los GOPHORA NFT Collectibles son llaves digitales de acceso temprano al ecosistema GOPHORA. 
                        <p></p>Estos NFTs no solo representan una propiedad digital única, sino que también otorgan a los poseedores un acceso privilegiado a experiencias exclusivas y reducidas dentro de la herramienta.
                        <p></p>Al ser titulares de un GOPHORA NFT Collectible, los usuarios disfrutan de beneficios significativos, incluidos acceso exclusivo a eventos VIP, descuentos exclusivos en accesorios que enriquecen la experiencia GOPHORA,, además de la distinción de tener su nombre inmortalizado en el QR que lanzamos al espacio el 11.11.23 desde la Agencia Boliviana Espacial como un símbolo de su contribución única al proyecto.
                        <p></p>Los poseedores de un GOPHORA NFT Collectibles están habilitados para recibir regalos especiales, participar en emocionantes drops de contenido exclusivo y, lo que es más importante, obtienen un acceso de por vida a las experiencias de GOPHORA STARSHIP.
                        <p></p>Esta herramienta innovadora, basada en Blockchain, no solo garantiza la trazabilidad de las contribuciones, sino que también permite a los poseedores de NFT vender su acceso, brindando flexibilidad y oportunidades de participación continua
                        <p></p> Los GOPHORA NFT Collectibles no solo son identificativos digitales de los intrépidos, innovadores, curiosos miembros de la siguiente generación de exploradores, sino que ofrecen un pasaporte exclusivo a un mundo de oportunidades dentro de GOPHORA, fusionando la propiedad digital con experiencias únicas y perpetuas en la exploración del espacio y el crecimiento personal.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta5')}>¿Qué significa ser Holder de uno de los NFT´s de GOPHORA?</h3>
                  {expandedSections['pregunta5'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                        <p></p>Ser holder de un GOPHORA NFT Collectible significa que eres el propietario de un Token No Fungible (NFT) específico emitido por GOPHORA Inc. Un NFT representa la propiedad única y verificable de un activo digital, en este caso, un GOPHORA NFT Collectible.
                        <p></p>Como holder, posees derechos específicos sobre ese NFT, cómo ser una esfera propia dentro de la GOPHORA STARSHIP y elementos exclusivos asociados con la plataforma GOPHORA. 
                        <p></p>Ser holder te concede:
                        <ol>
                          <li>Propiedad Exclusiva: Tienes la propiedad exclusiva del NFT y, por ende, de una esfera propia dentro de la GOPHORA STARSHIP un activo digital asociado que representa tu vehículo privado de exploración de horizontes.</li>
                          <li>Participación en Eventos GOPHORA: Tus NFTs te dan derecho a participar de eventos exclusivos en GOPHORA.</li>
                          <li>Acceso Exclusivo: Tus NFTs proporcionan acceso exclusivo a funciones y contenido dentro de la plataforma GOPHORA. Por ejemplo, podrías tener acceso privilegiado a ciertas áreas de nuestro metaverso o a eventos especiales de exploración.</li>
                          <li>Beneficios Económicos: Los holders recibirán beneficios económicos, como drops de tokens que pueden intercambiarse, venderse o cambiarse por accesorios o servicios dentro de la GOPHORA STARSHIP.</li>
                          <li>Valor de Mercado: Los NFTs a menudo tienen un valor de mercado, y los holders pueden decidir vender, intercambiar o conservar su NFT según sus preferencias.</li>
                          <li>Ser holder de un GOPHORA NFT Collectible no solo significa ser propietario de un activo digital único, sino también tener la oportunidad de participar y beneficiarte de manera exclusiva y continua dentro del ecosistema GOPHORA.</li>
                        </ol>
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta6')}>¿Qué son los Criptopurrs?</h3>
                  {expandedSections['pregunta6'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>Los GOPHORA NFT Collectibles: Criptopurrs MARTE ID, Criptopurrs EA o Criptopurrs Investor son activos digitales únicos y coleccionables basados en la tecnología de tokens no fungibles (NFT). 
                      <p></p>Cada NFT representa una pieza única de arte digital que puede dividirse en 25, 100 o 200 ediciones cada uno proporcionando llaves de acceso digital en GOPHORA.
                      <p></p>El arte detrás de cada uno de nuestros NFT´s se basa en nuestra innovadora misión que busca transformar la exploración espacial incluyéndonos a todos en ella,  imagina la vida en otros mundos con los Criptopurrs representándonos a nosotros cómo exploradores.
                      <p></p>Cada NFT Collectible tiene un valor único y representa algo especial.
                      <p></p>Además de su singularidad, lo distintivo de los Criptopurrs es que están registrados en una cadena de bloques, lo que garantiza la autenticidad y la propiedad exclusiva del titular del NFT.
                      <p></p>Los Criptopurrs de GOPHORA no solo son piezas de colección, sino también una forma de involucrarse de manera más profunda en la comunidad y en la visión futura de GOPHORA para una exploración espacial sostenible.
                      <p></p>Al adquirir un Criptopurr de GOPHORA, los usuarios no solo obtienen una llave  digital exclusiva, sino que también se convierten en parte de la narrativa y la evolución de GOPHORA, contribuyendo a su misión de trascender los límites de la exploración y la vida en otros mundos.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta7')}>¿Qué utilidad tiene el NFT MARTE ID?</h3>
                {expandedSections['pregunta7'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>Los CRIPTOPURRS MARTE ID representan accesos digitales exclusivos a la GOPHORA STARSHIP, diseñados para los niveles 1 y 2.
                      <p></p>En estos niveles, los titulares de CRIPTOPURRS MARTE ID tienen la oportunidad de explorar experiencias laborales, educativas y de hobbies. 
                      <p></p>Gracias a la potente GOPHORA STARSHIP, estas experiencias se visualizan como un radar, ajustándose de manera única a los parámetros establecidos por cada tripulante de la GOPHORA STARSHIP.
                      <p></p>Cada poseedor de un CRIPTOPURRS MARTE ID disfruta de una edición única entre las 200 disponibles por cada NFT CRIPTOPURRS MARTE ID, otorgándole una llave digital exclusiva para acceder a un vehículo privado dentro de la GOPHORA STARSHIP para los niveles 1 y 2. 
                      <p></p>Aquí, la experiencia es totalmente manual y requiere la destreza del tripulante como piloto. Esta modalidad no solo proporciona un toque personal a la experiencia, sino que también le brinda al tripulante acceso a la completa base de oportunidades disponibles. 
                      <p></p>Con la capacidad de combinar estas oportunidades de manera única, cada tripulante puede obtener un resultado personalizado que potencie su crecimiento y desarrollo.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta8')}>¿Qué utilidad tiene el NFT CRIPTOPURR EA?</h3>
                {expandedSections['pregunta8'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>Los CRIPTOPURRS EA representan accesos digitales más exclusivos a la GOPHORA STARSHIP, diseñados para los niveles 3 y 4.
                      <p></p>En estos niveles, los titulares de CRIPTOPURRS EA tienen la oportunidad de explorar experiencias laborales, educativas y de hobbies apoyados por una inteligencia artificial que personaliza su experiencia y carga diariamente las combinaciones de horizontes para el tripulante EA solo con una orden tipo Promt en una interfaz dentro del vehículo privado del holder en GOPHORA. 
                      <p></p>Gracias a la potente GOPHORA STARSHIP, estas experiencias se visualizan como un radar, ajustándose de manera única a los HORIZONTES generados por la IA de GOPHORA.
                      <p></p>Cada poseedor de un CRIPTOPURR EA disfruta de una edición única entre las 25 disponibles por cada NFT CRIPTOPURR EA, otorgándole una llave digital más exclusiva para acceder a un vehículo privado dentro de la GOPHORA STARSHIP para los niveles 3 y 4. 
                      <p></p>Aquí, la experiencia es totalmente automática y no requiere la destreza del tripulante como piloto. Esta modalidad proporciona combinaciones de experiencia inmediatas, y también le brinda al tripulante acceso a horizontes a medida del tripulante holder para  obtener un resultado personalizado que potencie su crecimiento y desarrollo.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta9')}>¿Cómo puedo comprar uno de los NFTs de GOPHORA?</h3>
                  {expandedSections['pregunta9'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>Actualmente los GOPHORA NFT COLLECTIBLES : Criptopurrs pueden ser adquiridos por venta directa en GOPHORA desde el formulario de Preembarque o desde Open Sea según los siguientes precios:
                      <a href="#nft">
                        <img src={NFTdispo} alt="gophora team" className='img-fluid'  />
                      </a>
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta10')}>¿Qué es la GOPHORA STARSHIP?</h3>
                  {expandedSections['pregunta10'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>La GOPHORA STARSHIP es la avanzada plataforma central de GOPHORA, diseñada para ofrecer una experiencia única de exploración personal y profesional que no solo beneficia al tripulante sino deja un registro de contribución y habilidades excepcionales que son conectadas con la exploración espacial para que podamos ser sustentables y sostenibles en nuevos horizontes. 
                      <p></p>Esta innovadora nave digital opera en ocho niveles, cada uno proporcionando oportunidades específicas para el crecimiento y desarrollo de los tripulantes, hasta el momento se ha liberado información concerniente únicamente a los niveles 1,2,3 y 4 dejando en suspenso lo que la GOPHORA STARSHIP ofrecerá en los futuros niveles 5,6,7,y8.
                      <p></p>Niveles 1 y 2 - CRIPTOPURRS MARTE ID: En estos niveles, los titulares de CRIPTOPURRS MARTE ID tienen acceso a experiencias escogidas de forma manual por el tripulante.
                      <p></p>Los Holders de los NFTs Marte ID Poseen un vehículo privado dentro de GOPHORA STARSHIP donde visualizan oportunidades laborales, educativas y de capacitación como un radar personalizado. 
                      <p></p>Cada poseedor de un CRIPTOPURR MARTE ID disfruta de una edición única entre las 200 disponibles x cada NFT.
                      <p></p>Niveles 3 y 4 - CRIPTOPURRS EA: Elevando la experiencia, los CRIPTOPURRS EA ofrecen llaves digitales aún más exclusivas para los niveles 3 y 4. 
                      <p></p>Impulsados por una inteligencia artificial, estos niveles permiten una exploración automática y personalizada. Los titulares de CRIPTOPURRS EA, poseen uno de entre las 25 ediciones disponibles por cada NFT.
                      <p></p>Su GOPHORA puede cargarse diariamente con combinaciones de horizontes con una simple orden tipo &quot;Prompt&quot;, disfrutando de un acceso exclusivo a su vehículo privado dentro de la GOPHORA STARSHIP.
                      <p></p>La GOPHORA STARSHIP redefine la exploración al fusionar lo manual y lo automático, brindando oportunidades personalizadas y exclusivas a cada tripulante. Descubre un viaje hacia horizontes sin igual en GOPHORA STARSHIP.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta11')}>¿En cuántos países estará disponible la herramienta GOPHORA STARSHIP?</h3>
                  {expandedSections['pregunta11'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p></p>La herramienta GOPHORA STARSHIP tiene como objetivo llegar a múltiples países en diversas fases estratégicas, por el momento es impreciso estimar un número pero si estaremos presentes en diferentes idiomas, y regiones del mundo. 
                      <p></p>Comenzando en Bolivia, nuestra fase inicial, ya que los Fundadores somos de esta región, nos enfocamos en perfeccionar la plataforma y adaptarla al mercado local. 
                      <p></p>A medida que consolidamos nuestra presencia, planeamos expandirnos gradualmente a países de América Latina, aprovechando la aceptación inicial en Bolivia.
                      <p></p>Con el éxito en la región latinoamericana, tenemos la visión de ingresar a mercados más grandes y complejos, incluyendo América del Norte y Europa. 
                      <p></p>Estableceremos asociaciones estratégicas y adaptaremos la plataforma para cumplir con las regulaciones y expectativas específicas de cada región.
                      <p></p>La expansión global continuará con la entrada en mercados emergentes en Asia y África. 
                      <p></p>A través de alianzas locales y adaptaciones precisas, buscamos llevar la visión transformadora de GOPHORA a personas de todo el mundo.
                      <p></p>GOPHORA STARSHIP se proyecta como una herramienta global, disponible en diversos países, permitiendo a personas de diferentes culturas y regiones explorar nuevas oportunidades y contribuir a la exploración del espacio.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta12')}>¿Cuál es la ventaja de comprar AHORA un GOPHORA NFT COLLECTIBLE?</h3>
                  {expandedSections['pregunta12'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p>La compra de un GOPHORA NFT Collectible ahora ofrece varias ventajas distintivas:</p>
                      <ol>
                        <li>Precio de minteo directamente desde GOPHORA, es decir el menor precio que cada NFT va a tener en su historia.</li>
                        <li>Acceso Exclusivo y Temprano a GOPHORA STARSHIP: Al adquirir un GOPHORA NFT Collectible, aseguras tu acceso temprano y exclusivo a la innovadora GOPHORA STARSHIP. Ser parte de los primeros poseedores te coloca al frente de la fila para explorar experiencias únicas y personalizadas antes de su lanzamiento público </li>
                        <li>Propiedad Digital Única: Cada NFT es una pieza única y exclusiva en el mundo digital. Ser dueño de un GOPHORA NFT Collectible te proporciona una propiedad digital que no solo refleja tu participación en la comunidad de GOPHORA, sino que también puede convertirse en un activo valioso en el futuro</li>
                        <li>Beneficios Exclusivos para Holders: Los poseedores de GOPHORA NFT Collectibles disfrutan de beneficios exclusivos, como acceso VIP a eventos, descuentos en accesorios para mejorar la experiencia GOPHORA, y la oportunidad de ver su nombre inmortalizado en el espacio a través del QR lanzado por GOPHORA STARSHIP.</li>
                        <li>Participación en el Desarrollo de GOPHORA: Al comprar un GOPHORA NFT Collectible, te conviertes en un contribuyente activo al crecimiento y desarrollo de GOPHORA. Tu participación apoya la expansión y mejora continua de la plataforma, permitiéndote ser parte integral de la evolución de esta emocionante iniciativa.</li>
                        <li>Potencial de Inversión: Como propietario de un GOPHORA NFT Collectible, tienes la posibilidad de explorar el potencial de inversión en el mercado de NFT, ya que estos activos digitales pueden adquirir valor con el tiempo, especialmente dada la exclusividad y utilidad de cada llave Digitel.</li>                   
                      </ol>
                      <p></p>Comprar ahora un GOPHORA NFT Collectible no solo te brinda acceso privilegiado a la plataforma y beneficios exclusivos, sino que también representa una oportunidad de ser parte de la comunidad de exploradores y beneficiarte de su valor a lo largo del tiempo.
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta13')}>¿Cómo se holdean o guardan los NFTs de GOPHORA?</h3>
                  {expandedSections['pregunta13'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p>Holdear (o &quot;HODL&quot; en la jerga criptográfica) los GOPHORA NFT Collectibles es un proceso sencillo que implica retenerlos a largo plazo en lugar de venderlos de inmediato.</p>
                      <p>Aquí hay algunos pasos y consideraciones para holdear tus GOPHORA NFT Collectibles:</p>
                      <ol>
                        <li>Adquiere tus NFT Collectibles: Primero, asegúrate de adquirir tus GOPHORA NFT Collectibles mediante el formulario y proceso establecidos por GOPHORA Inc.</li>
                        <li>Wallet, Cartera o Billetera para Criptomonedas: Utiliza una billetera para criptomonedas compatible con NFT para almacenar tus GOPHORA NFT Collectibles. Puedes utilizar carteras compatibles con estándares como ERC-721 basado en Ethereum u otros estándares NFT, recomendamos Metamask o Coinbase Wallet.</li>
                        <li>Seguridad de tu Wallet: Asegúrate de que tu cartera de criptomonedas esté segura. Respalda tu frase semilla de 12 palabras en una agenda que no vayas a perder. Utiliza medidas de seguridad robustas, Sugerimos autenticación con huella digital o autenticación de dos factores, para proteger tus activos digitales.</li>
                        <li>HODL y Monitoreo: Una vez que hayas adquirido tus GOPHORA NFT Collectibles, simplemente &quot;HODL&quot;. Mantén tus NFT en tu cartera y monitorea el mercado y las actualizaciones de GOPHORA para estar al tanto de cualquier noticia relevante.</li>
                        <li>Participación en la Comunidad: participa activamente en la comunidad de GOPHORA. Esto te permite estar informado sobre desarrollos futuros, eventos exclusivos para holders, y conectarte con otros miembros de la comunidad.</li>
                        <li>Explorar Oportunidades de Interacción: Dependiendo de las funciones y características que vayamos liberando en GOPHORA, puedes explorar oportunidades para interactuar con tus GOPHORA NFT Collectibles. Esto podría incluir participar en eventos exclusivos, acceder a beneficios especiales en locales y restaurantes o incluso utilizar tus NFT en funciones específicas de la GOPHORA STARSHIP.</li>
                        <li>Evaluar Oportunidades de Mercado: A medida que evoluciona la GOPHORA STARSHIP y el ecosistema de GOPHORA, puedes evaluar oportunidades para vender o intercambiar tus NFTs. Ten en cuenta los factores del mercado y tus metas personales al tomar decisiones sobre tus activos digitales NFTs.</li>
                      </ol>
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta14')}>¿Cómo puedo formar parte del proyecto?</h3>
                  {expandedSections['pregunta14'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p>Puedes formar parte de GOPHORA STARSHIP en diferentes formas, desde ser un usuario activo hasta contribuir como miembro de la comunidad o incluso explorar oportunidades más colaborativas.</p>
                      <p>Como:</p>
                      <ol>
                        <li>Explora el proyecto: Comienza por explorar el sitio web de GOPHORA y familiarízate con la visión y misión del proyecto, lee cuales serán sus funciones y características principales. Explora cómo GOPHORA STARSHIP operará y qué ofrecerá a sus usuarios.</li>
                        <li>Adquiere GOPHORA NFT Collectibles: Considera la posibilidad de adquirir tus GOPHORA NFT Collectibles para obtener acceso exclusivo a la GOPHORA STARSHIP y disfrutar de beneficios especiales.</li>
                        <li>Participa en la Comunidad: Únete a los canales de la comunidad GOPHORA, que incluyen foros en Discord, grupos de Facebook, o incluso eventos virtuales. Participar en la comunidad te permite conectarte con otros miembros, compartir experiencias y estar al tanto de las últimas noticias y actualizaciones del proyecto</li>
                        <li>Contribuye con Feedback: Si eres holder EA o MARTE ID eres parte del Concierge MVP y de las primeras experiencias de la GOPHORA STARSHIP, proporciona feedback constructivo sobre tu experiencia. Esto puede ayudar a los desarrolladores a mejorar y perfeccionar GOPHORA.</li>
                        <li>Explorar Oportunidades de Colaboración: Si tienes habilidades específicas o ideas que podrían beneficiar al proyecto, considera la posibilidad de explorar oportunidades de colaboración. GOPHORA podría estar abierta a la contribución de desarrolladores, diseñadores, creadores de contenido u otros profesionales.</li>
                        <li>Mantente Informado: Esté atento a los comunicados de GOPHORA, actualizaciones y anuncios. Infórmate sobre las oportunidades de participación que podrían surgir a medida que el proyecto evoluciona.</li>
                        <li>Participación en Eventos y Actividades: GOPHORA organiza eventos, conferencias y ciclos de experiencias relacionadas con la comunidad creciente de emisores, considera participar. Esto puede ofrecerte la oportunidad de aprender más sobre el proyecto y conectarte con otros holders.</li>
                        <li>Explora Opciones de Empleo o Colaboración Profesional escribiéndonos a pasantias@gophora.com Si estás interesado en una participación más profunda, GOPHORA tiene oportunidades de empleo o colaboración profesional. Buscamos talento para contribuir al crecimiento. de GOPHORA STARSHIP.</li>
                      </ol>
                    </div>
                  )}
                <h3 className="text-warning mb-3 desplegar" onClick={() => handleToggleVisibility('pregunta15')}>¿Cómo invertir en GOPHORA?</h3>
                  {expandedSections['pregunta15'] && (
                    <div className='d-flex flex-column mb-5 text-light'>
                      <p>Puedes invertir en GOPHORA de 2 maneras:</p>
                      <ol>
                        <li>Compra tus GOPHORA NFT COLLECTIBLES: CRIPTOPURRS MARTE ID o CRIPTOPURR EA , ambos cargan utilidad de por vida en la plataforma y al ser propiedad digital pueden venderse en el futuro , con un precio de minteo mínimo desde GOPHORA aseguras que tu inversión está respaldad por un proyecto que tiene miras de crecimiento exponencial y NFTs limitados que son designados según el 3% de la población de cada país en donde GOPHORA STARSHIP provea su herramienta de horizontes, inicialmente en Bolivia existe un suministro de 300.000 accesos contenidos en 2.900 NFTs CRIPTOPURRS.</li>
                        <li>Compra los NFT CRPTOPURR INVESTOR con un precio aún más ventajoso contiene 100 accesos que pueden venderse en el futuro por separado, además obtienes el 50% de descuento en todo el catalogo de los accesorios que GOPHORA proveerá en el futuro, lo que sin duda te permitirá tenar una fuente de recursos de la reventa de estos accesorios al creciente grupo de usuarios de la GOPHORA STARSHIP, sin tomar en cuenta que además obtienes una land en el futuro metaverso de GOPHORA en donde podrás organizar eventos de pago o poner un negocio para proveer servicios o productos a los usuarios de la STARSHIP.</li>
                      </ol>
                      
                    </div>
                  )}
              </div>
              )}
        </div>
    </section>

  )
}

export default PreguntasScreen