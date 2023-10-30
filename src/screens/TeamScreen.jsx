import backgroundImage from "../assets/planetaBackground2.png";
import nft1 from "../assets/1.png";
import nft2 from "../assets/2.png";
import nft3 from "../assets/3.png";
import nft4 from "../assets/4.png";
function TeamScreen() {
  return (
    <section className="home-section font-class d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container my-2">
            <h1 className="text-warning mb-5">TEAM</h1>
            <div className="row row-cols-1  row-cols-sm-2 row-cols-md-5 g-3">
                <div className="col">
                    <div className="card h-100 card-background">
                        <img src={nft1} className="card-img-top" alt="CARBONFIRE_"/>
                        <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                            <h5 className="card-title title-font">CARBONFIRE_</h5>
                            <p className="card-text text-font">COFOUNDER<br/>SENIOR DEV.<br/> BACKEND<br/> BLOCKCHAIN<br/>CTO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                        <img src={nft2} className="card-img-top" alt="VISNITY_"/>
                        <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                            <h5 className="card-title title-font">VISNITY_</h5>
                            <p className="card-text text-font">FOUNDER<br/> LEADER<br/>VISIONARY<br/>STRATEGIC PLANNER<br/>COMUNICATOR<br/> CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft3} className="card-img-top" alt="TOMMATOMIC_"/>
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h5 className="card-title title-font">TOMMATOMIC_</h5>
                        <p className="card-text text-font">COLABORATOR <br/>FRONTEND<br/> LOGISTICS <br/>BLOCKCHAIN<br/>COO</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft4} className="card-img-top" alt="DEALENCAR_"/>
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h5 className="card-title title-font">DEALENCAR_</h5>
                        <p className="card-text text-font">COFOUNDER <br/>WEB, MOBILE<br/> FRONTEND<br/> AR / VR<br/> METAVERSE DEV.<br/>CIO</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft4} className="card-img-top" alt="DEALENCAR_"/>
                    <div className="card-body d-flex flex-column justify-content-start align-items-center my-4">
                        <h5 className="card-title title-font">OSCAR VC_</h5>
                        <p className="card-text text-font">INVESTOR<br/>COLABORATOR<br/>MARKETING<br/>SALES<br/>DIGITAL<br/>CHANNELS<br/>CMO</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="dropdown-center d-flex justify-content-center align-items-center m-3">
                    <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        COMPANY DOCUMENTATION
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="src\assets\docs\Doc1.pdf" target="_blank" rel="noopener noreferrer">DOCUMENTO DE GOPHORA INC. 1</a></li>
                        <li><a className="dropdown-item" href="src\assets\docs\Doc2.pdf" target="_blank" rel="noopener noreferrer">DOCUMENTO DE GOPHORA INC. 2</a></li>
                        {/* <li><a className="dropdown-item" href="#">Action three</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamScreen