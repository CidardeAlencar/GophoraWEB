import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import ComprarScreen from '../components/ComprarScreen'
import NFTCards from '../components/nftCards'

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
        <NFTCards 
          nftImage={nft1}
          title="CRIPTOPURR MARTE ID NFT"
          stitle="200 ediciones x NFT"
          l1="Acceso a GOPHORA STARSHIP niveles 1 y 2."
          l2="Nombre en QR modulo espacial."
          l3="10% Descuento de por vida en accesorios GOPHORA."
          l4="Acceso a evento anual GOPHORA."
          pb="50"
          pm="10"
        />
        <NFTCards 
          nftImage={nft2}
          title="CRIPTOPURR (EA) EARLY ADOPTER NFT"
          stitle="25 ediciones x NFT"
          l1="Acceso a GOPHORA STARSHIP niveles 1,2,3 y 4."
          l2="Nombre en QR modulo espacial."
          l3="30% Descuento de por vida en accesorios GOPHORA."
          l4="Acceso a Metaverso GOPHORA."
          pb="50"
          pm="10"
        />
        <NFTCards 
          nftImage={nft3}
          title="CRIPTOPURR INVESTOR"
          stitle="1 NFT ENTERO 100 Accesos"
          l1="100 Accesos a GOPHORA STARSHIP niveles 1,2,3 y 4."
          l2="100 Nombres en QR modulo espacial."
          l3="50% Descuento de por vida en accesorios GOPHORA."
          l4="Acceso a Metaverso GOPHORA."
          l5="1 Land para negocio GOPHORA VR."
          pb="50"
          pm="10"
        />
        {/* GUIA */}
        <h1 className="text-light font-class p-5">
            GUÍA PARA COMPRAR UN <span className="text-warning">NFT </span> GOPHORA
        </h1>
        <p className="text-light text-center font-class w-75 p-5">
        Descarga una billetera cripto, puede ser Metamask o Coinbase WALLET, si ya tienes una ¡perfecto! solo asegúrate que tengas una dirección de Ethereum a la cual se te podamos mandar tus GOPHORA NFT COLLECTIBLES CRIPTOPURRS MARTE ID o CRIPTOPURRS EA.
        </p>
        <div className="container-fluid p-0">
          <div className="col-12 d-flex justify-content-center align-items-center p-0">
              {/* <img src={criptopurrs} alt="Criptopurrs" className="img-full-height"/> */}
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
        </div>
        <p className="text-light text-center font-class w-75 p-5">
          ¡Super!, ya tienes una dirección de Ethereum, ahora tienes que llenar el <span className="text-warning">FORMULARIO DE PREEMBARQUE</span>, este es un Formulario de Pre-venta que te conectará directamente con nuestro departamento comercial, el cuál te ayudará a terminar el proceso de compra de tu NFT, puedes pagar en efectivo con transferencia QR o con Criptomonedas directamente de tu billetera cripto.
        </p>
        {/* aÑADIR Formulario */}
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
            CICLOS DE EXPERIENCIA GOHORA
        </h1>
        <p className="text-light text-center font-class w-75">Participa de los Ciclos de Experiencia de nuestro concierge MVP, y gana NFTs, merchandising, descuentos, y mucho más.</p>

        <p className="text-light text-center font-class w-75">Si eres Holder de los GOPHORA NFT COLLECTIBLES, emitiremos los horizontes de experiencia VIp a través de nuestro canal privado de Discord, dale link al siguiente enlace y logueate con tu NFT.</p>

        <p className="text-primary text-center font-class w-75">discord..invitacion.com</p>
        <h1 className="text-warning font-class p-5">
            TRABAJO
        </h1>
        <h1 className="text-warning font-class p-5">
            EDUCACION
        </h1>
        <h1 className="text-warning font-class p-5">
            HOBBIES
        </h1>
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