import { useState } from 'react';
import backgroundImage from "../assets/ABE.png";
// import nft1 from "../assets/1.png";
// import nft2 from "../assets/2.png";
// import nft3 from "../assets/3.png";
// import nft4 from "../assets/4.png";
// import nft5 from "../assets/5.png";
function TeamScreen() {
    const [isSectionVisible, setSectionVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setSectionVisibility(!isSectionVisible);
  };
  return (
    // <section className="home-section font-class d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${backgroundImage})`,minHeight: "100vh" }}>
    <section className="font-class d-flex flex-column justify-content-center align-items-center" id="team">
        <h1 className="text-warning mb-5 desplegar" onClick={handleToggleVisibility}>
            TEAM
            {isSectionVisible && (<i className="bi bi-caret-up"></i>)}
            {!isSectionVisible && (<i className="bi bi-caret-down"></i>)}
        </h1>
        {isSectionVisible && (
            
        <div className="container my-2">
            <img src={backgroundImage} alt="team" className="img-fluid"/>
            {/* <h1 className="text-warning mb-5">TEAM</h1> */}
            <h3 className="text-warning p-5">Founders</h3>
            <div className="row row-cols-1  row-cols-sm-2 row-cols-md-4 g-3">
                <div className="col">
                    <div className="card h-100 card-background">
                        {/* <img src={nft2} className="card-img-top" alt="VISNITY_"/> */}
                        <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                            <h5 className="card-title title-font" style={{ color: '#B377FF' }}>VISNITY_</h5>
                            <p className="card-text text-font">FOUNDER<br/> LEADER<br/>VISIONARY<br/>STRATEGIC PLANNER<br/>COMUNICATOR<br/> CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                        {/* <img src={nft1} className="card-img-top" alt="CARBONFIRE_"/> */}
                        <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                            <h5 className="card-title title-font">CARBONFIRE_</h5>
                            <p className="card-text text-font">COFOUNDER<br/>SENIOR DEV.<br/> BACKEND<br/> BLOCKCHAIN<br/>CTO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    {/* <img src={nft4} className="card-img-top" alt="DEALENCAR_"/> */}
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h5 className="card-title title-font" style={{ color: '#438BE6' }}>ALENCAR_</h5>
                        <p className="card-text text-font">COFOUNDER <br/>WEB, MOBILE<br/> FRONTEND<br/> AR / VR<br/> METAVERSE DEV.<br/>CIO</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    {/* <img src={nft3} className="card-img-top" alt="TOMMATOMIC_"/> */}
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h5 className="card-title title-font" style={{ color: '#C9F77F' }}>TOMATOMIC_</h5>
                        <p className="card-text text-font">COLABORATOR <br/>FRONTEND<br/> LOGISTICS <br/>BLOCKCHAIN<br/>COO</p>
                    </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft5} className="card-img-top" alt="DEALENCAR_"/>
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h5 className="card-title title-font">OSCAR VC_</h5>
                        <p className="card-text text-font">INVESTOR<br/>COLABORATOR<br/>MARKETING<br/>SALES<br/>DIGITAL<br/>CHANNELS<br/>CMO</p>
                    </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="row">
                <div className="dropdown-center d-flex justify-content-center align-items-center m-3">
                    <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        COMPANY DOCUMENTATION
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="https://drive.google.com/file/d/1Mu2ouE28fEtFczIxXSZmro4KzRAKY3uS/view?usp=sharing" target="_blank" rel="noopener noreferrer">DOCUMENTO DE GOPHORA INC. 1</a></li>
                        <li><a className="dropdown-item" href="https://drive.google.com/file/d/1RXOL353iQVpkUSDE5x1aVS0Ujp8U4fqX/view?usp=sharing" target="_blank" rel="noopener noreferrer">DOCUMENTO DE GOPHORA INC. 2</a></li>
                        <li><a className="dropdown-item" href="https://drive.google.com/file/d/1o30PIs1DyINSpyuluejHD5qgkQSJ4O66/view?usp=sharing" target="_blank" rel="noopener noreferrer">GOPHORA</a></li>
                    </ul>
                </div>
            </div> */}
            <h3 className="text-warning p-5">Colaboradores</h3>
            <div className="row row-cols-1  row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card h-100 card-background">
                        {/* <img src={nft2} className="card-img-top" alt="VISNITY_"/> */}
                        <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                            <h5 className="card-title title-font" style={{ color: '#FF8617' }}>PERRY_</h5>
                            <p className="card-text text-font">COMUNIDADES<br/> UNIVERSITARIAS<br/>EVENTOS<br/>PATROCINIOS</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                        {/* <img src={nft1} className="card-img-top" alt="CARBONFIRE_"/> */}
                        <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                            <h5 className="card-title title-font" style={{ color: '#E38EB2' }}>SERGIO_</h5>
                            <p className="card-text text-font">NETWORK VC<br/>EXPERIENCIAS GS<br/> VENTAS Y MERCADO<br/> IMPLEMENTACIÓN</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    {/* <img src={nft4} className="card-img-top" alt="DEALENCAR_"/> */}
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h3 className="card-title title-font text-warning">Ser Colaborador:</h3>
                        <p className="card-text text-font">Envia tu Hoja de Habilidades</p>
                        <h5 className="card-title title-font text-warning">nftcollectibles@gophora.com</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </section>
  )
}

export default TeamScreen