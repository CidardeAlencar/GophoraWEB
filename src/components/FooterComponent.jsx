function FooterComponent() {
  return (
    <div className="container py-1">
        <div className="row">
            <div className="col-12 col-md-6 text-light text-center font-class">
                {/* Todos los derechos reservados  */}
                <p>Construyendo GOPHORA con <i className="bi bi-heart-fill text-danger"></i> desde La Paz, BO | Florida, USA</p>
            </div>
            {/* <div className="col-12 col-md-3 text-light text-center font-class">
                GOPHORA INC.
            </div> */}
            <div className="col-12 col-md-6 d-flex justify-content-evenly align-items-center">
                <a href="https://www.instagram.com/gophoranftcollectibles/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/GophoraNft" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                </a>
                {/* <a href="https://discord.gg/jbhzwjfcpV" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-discord"></i>
                </a> */}
                <a href="https://wa.me/59170516511" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.youtube.com/@andreavcovarrubias9264" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube"></i>
                </a>

            </div>
        </div>

    </div>
  )
}

export default FooterComponent