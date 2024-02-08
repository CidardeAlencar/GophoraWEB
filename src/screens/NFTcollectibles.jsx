import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import ComprarScreen from '../components/ComprarScreen'
import NFTCards from '../components/nftCards'
import NFTCards2 from "../components/nftCards2";

function NFTcollectibles() {
  return (
    <section id="nft" className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-warning font-class p-5">
            {/* <span className="text-warning">NFT </span> */}
             MEMBRESIAS
        </h1>
        <div className="text-light d-flex justify-content-center font-class w-75 pb-5">
              <ul>
                <li>Nombre en QR Espacial.</li>
                <li>Horizontes de Trabajo ilimitados.</li>
                <li>Horizontes de Educación ilimitados.</li>
                <li>Horizontes de Experiencias hobbies ilimitados.</li>
                <li>(Próximamente) 20% de descuento en accesorios para experiencia GOPHORA AR/VR.</li>
                <li>(Próximamente) Contribución sobre Blockchain.</li>
                <li>(Próximamente) Acceso a Metaverso GOPHORA.</li>
              </ul>
        </div>

        <h2 className="font-class my-3 text-center font-2">
          {/* DISPONIBLES */}
          {/* Accesos para Tripulantes */}
          ACCESOS PARA TRIPULANTES
        </h2>
        {/* Nombre del tripulante en QR del lanzamiento espacial.
        Descuento en talleres y capacitaciones de interés del Ecosistema GOPHORA.
        Descuento en productos de empresas afiliadas a GOPHORA.
        Descuento en accesorios para experiencia GOPHORA.
        Acceso a oportunidades inmediatas de trabajo del ecosistema GOPHORA.
        Acceso a experiencias de hobbies y eventos del ecosistema de GOPHORA.
        1/200 acceso digital en forma de NFT a GOPHORA STARSHIP 
        MARTE ID NFT de temporada con beneficios exclusivos para el holder y características especiales. */}
        <NFTCards2
          nftImage={nft1}
          title="TRIPULANTE MARTE ID"
          stitle="10 $us. / Anual"
          l1="Nombre del tripulante en QR del lanzamiento espacial."
          l2="Descuento en talleres y capacitaciones de interés del Ecosistema GOPHORA."
          l3="Descuento en productos de empresas afiliadas a GOPHORA."
          l4="Descuento en accesorios para experiencia GOPHORA."
          l5="Acceso a oportunidades inmediatas de trabajo del ecosistema GOPHORA."
          l6="Acceso a experiencias de hobbies y eventos del ecosistema de GOPHORA."
          l7="1/200 acceso digital en forma de NFT a GOPHORA STARSHIP"
          l8="MARTE ID NFT de temporada con beneficios exclusivos para el holder y características especiales."
        />
        <NFTCards2
          nftImage={nft2}
          title="TRIPULANTE MARTE ID"
          stitle="10 $us. / Anual"
          l1="Nombre del tripulante en QR del lanzamiento espacial."
          l2="Descuento en talleres y capacitaciones de interés del Ecosistema GOPHORA."
          l3="Descuento en productos de empresas afiliadas a GOPHORA."
          l4="Descuento en accesorios para experiencia GOPHORA."
          l5="Acceso a oportunidades inmediatas de trabajo del ecosistema GOPHORA."
          l6="Acceso a experiencias de hobbies y eventos del ecosistema de GOPHORA."
          l7="1/200 acceso digital en forma de NFT a GOPHORA STARSHIP"
          l8="MARTE ID NFT de temporada con beneficios exclusivos para el holder y características especiales."
        />
        {/* <NFTCards 
          nftImage={nft1}
          title="CRIPTOPURR MARTE ID NFT"
          stitle="200 ediciones x NFT"
          l1="Acceso a GOPHORA STARSHIP niveles 1 y 2."
          l2="Nombre en QR modulo espacial."
          l3="10% Descuento de por vida en accesorios GOPHORA."
          l4="Acceso a evento anual GOPHORA."
          pb="10"
          pm="14"
        /> */}
        {/* <NFTCards 
          nftImage={nft2}
          title="CRIPTOPURR (EA) EARLY ADOPTER NFT"
          stitle="25 ediciones x NFT"
          l1="Acceso a GOPHORA STARSHIP niveles 1,2,3 y 4."
          l2="Nombre en QR modulo espacial."
          l3="30% Descuento de por vida en accesorios GOPHORA."
          l4="Acceso a Metaverso GOPHORA."
          pb="80"
          pm="112"
        /> */}
        <h2 className="font-class font-2 my-5">
          {/* DISPONIBLES */}
          {/* Accesos para Tripulantes */}
          ACCESOS PARA EMPRESAS
        </h2>
        <NFTCards 
          nftImage={nft3}
          title="CRIPTOPURR INVESTOR"
          stitle="1 NFT ENTERO 100 Accesos"
          l1="100 Accesos a GOPHORA STARSHIP niveles 1,2,3 y 4."
          l2="100 Nombres en QR modulo espacial."
          l3="50% Descuento de por vida en accesorios GOPHORA."
          l4="Acceso a Metaverso GOPHORA."
          l5="1 Land para negocio GOPHORA VR."
          pb="2000"
          pm="2800"
        />
        {/* GUIA */}
        <h1 className="text-warning font-class p-5">
            {/* GUÍA PARA COMPRAR UN <span className="text-warning">NFT </span> GOPHORA */}
            GUÍA PARA RECIBIR UN ACCESO DIGITAL <span className="text-warning">NFT </span> GOPHORA
        </h1>
        <p className="text-light text-center font-class w-75 p-5">
          Descarga una billetera cripto, puede ser Metamask o Coinbase WALLET, si ya tienes una ¡perfecto! solo asegúrate que tengas una dirección de Ethereum a la cual se te podamos mandar tus GOPHORA NFT COLLECTIBLES CRIPTOPURRS MARTE ID o CRIPTOPURRS EA.
        </p>
        <button className="font-class nav-link my-nav-link2 p-3 fs-1">
          <a href="https://drive.google.com/file/d/16gu75RxbMBrJIigcQsgJqQAiUESbdxeB/preview" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            Ver Video
          </a>
        </button>
        {/* <div className="container-fluid p-0">
          <div className="col-12 d-flex justify-content-center align-items-center p-0">
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src="https://drive.google.com/file/d/16gu75RxbMBrJIigcQsgJqQAiUESbdxeB/preview"
                  title="Google Drive video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
        </div> */}
        <p className="text-light text-center font-class w-75 p-5">
          ¡Super!, ya tienes una dirección de Ethereum, ahora tienes que llenar el <span className="text-warning">FORMULARIO DE PREEMBARQUE</span>, este es un Formulario de Pre-venta que te conectará directamente con nuestro departamento comercial, el cuál te ayudará a terminar el proceso de compra de tu NFT, puedes pagar en efectivo con transferencia QR
        </p>
        {/* aÑADIR Formulario */}
        <button className="font-class nav-link my-nav-link2 p-3 fs-1">
          <a href="https://drive.google.com/file/d/16gu75RxbMBrJIigcQsgJqQAiUESbdxeB/preview" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            Formulario
          </a>
        </button>
        <ComprarScreen/>
        {/*  */}
        <p className="text-light text-center font-class w-75 p-5">
          ¡Genial!, Ya que procesaste el pago con un agente de nuestro departamento comercial, revisa tu billetera cripto, en la sección de NFT, debería aparecer tu CRIPTOPURR MARTE ID o CRIP´TOPURR EA, para revisar los detalles de la transacción puedes verla en OpenSea, logueándote con tu billetera cripto en opensea.com. 
        </p>
        <h3 className="text-light font-class p-5">
            BIENVENIDO A <span className="text-warning">PREEMBARQUE</span>
        </h3>
        <p className="text-light text-center font-class w-75 p-5">
          Tu nombre será añadido al QR que lanzamos al espacio el 11.11.23, y ahora formas parte de GOPHORA STARSHIP, guarda bien tu NFT por que es tu acceso a todo el ecosistema GOPHORA.
        </p>
        {/* EXPERIENCIAS */}
        <h1 className="text-warning font-class p-5">
            CICLOS DE EXPERIENCIA GOPHORA
        </h1>
        <p className="text-light text-center font-class w-75">Participa de los Ciclos de Experiencia de nuestro concierge MVP, y gana NFTs, merchandising, descuentos, y mucho más.</p>

        <p className="text-light text-center font-class w-75">Si eres Holder de los GOPHORA NFT COLLECTIBLES, emitiremos los horizontes de experiencia VIp a través de nuestro canal privado de Discord, dale link al siguiente enlace y logueate con tu NFT.</p>

        <p className="text-primary text-center font-class w-75">discord..invitacion.com</p>
        {/* <h1 className="text-warning font-class p-5">
            TRABAJO
        </h1>
        <h1 className="text-warning font-class p-5">
            EDUCACION
        </h1>
        <h1 className="text-warning font-class p-5">
            HOBBIES
        </h1> */}
        <p className="text-light text-center font-class w-75">Quieres saber más, ingresa tu correo y te mandaremos más información</p>
        <div className="w-50">
          <form className="row">
            <div className="col-2"></div>
            <div className="col-12 col-md-6 p-2">
              <label htmlFor="inputPassword2" className="visually-hidden">Correo electronico</label>
              <input type="email" className="form-control" id="inputPassword2" placeholder="Correo electronico"/>
            </div>
            <div className="col-12 col-md-2 p-2 text-center">
              <button type="submit" className="btn btn-warning mb-3">SUSCRIBIME</button>
            </div>
            <div className="col-2"></div>
          </form>
        </div>    
    </section>
    
  )
}

export default NFTcollectibles