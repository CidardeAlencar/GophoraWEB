import backgroundImage from "../assets/planetaBackground2.png";
import nft1 from "../assets/1.png";
import nft2 from "../assets/2.png";
import nft3 from "../assets/3.png";
import nft4 from "../assets/4.png";
function TeamScreen() {
  return (
    <section className="home-section font-class d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container my-2">
            <h1 className="text-warning text-center mb-5">TEAM</h1>
            <div className="row row-cols-1  row-cols-sm-2 row-cols-md-4 g-3">
                <div className="col">
                    <div className="card h-100 card-background">
                        <img src={nft1} className="card-img-top" alt="CARBONFIRE_"/>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center my-4">
                            <h5 className="card-title title-font">CARBONFIRE_</h5>
                            <p className="card-text text-font">COFOUNDER SENIOR DEV. BACKEND BLOCKCHAIN</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft2} className="card-img-top" alt="VISNITY_"/>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center my-4">
                        <h5 className="card-title title-font">VISNITY_</h5>
                        <p className="card-text text-font">FOUNDER P. OWNER A.I. VISION CEO</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft3} className="card-img-top" alt="TOMMATOMIC_"/>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center my-4">
                        <h5 className="card-title title-font">TOMMATOMIC_</h5>
                        <p className="card-text text-font">COFOUNDER FRONTEND LOGISTICS BLOCKCHAIN</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 card-background">
                    <img src={nft4} className="card-img-top" alt="DEALENCAR_"/>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center my-4">
                        <h5 className="card-title title-font">DEALENCAR_</h5>
                        <p className="card-text text-font">COFOUNDER WEB, MOBILE FRONTEND AR / VR METAVERSE DEV.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamScreen