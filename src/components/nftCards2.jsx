import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
    // import bs from "../assets/bs.png";
    // import mt from "../assets/matic.png";
// import OpenSea from "../assets/opensea.png";
import gophora from "../assets/GOPHORASTARSHIP.png";
function NFTCards2(props) {
    const {nftImage, title ,stitle,l1,l2,l3,l4,l5,l6,l7,l8} = props;
  return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className="card m-3 card-nft text-light font-class rounded-5 p-4">
            <div className="row g-0">
                <h3 className="card-title text-center p-3 text-warning" >{title}</h3>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={nftImage} className="img-fluid rounded" alt="..."/>
                </div>
                <div className="col-md-8 d-flex">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <h4 className="card-text text-center p-3" style={{color:'#733fff'}}>{stitle}</h4>
                        <ul>
                            <li>{l1}</li>
                            <li>{l2}</li>
                            <li>{l3}</li>
                            {l4 && <li>{l4}</li>}
                            {l5 && <li>{l5}</li>}
                            {l6 && <li>{l6}</li>}
                            {l7 && <li>{l7}</li>}
                            {l8 && <li>{l8}</li>}
                        </ul>
                        {/* <h5 className="card-title text-warning">PRECIO:</h5>
                        <p className="card-text">
                            {pb} Bolivianos     
                            <img src={bs} className="img-fluid" alt="moneda boliviana" style={{maxWidth:'50px'}}/>
                            <span className="text-warning"> o </span> 
                            {pm} MATIC 
                            <img src={mt} className="img-fluid" alt="matic" style={{maxWidth:'50px'}}/>
                        </p> */}
                    </div>
                </div> 
            </div>
            <div className="overlay">
                <p>COMPRAR:</p>
                <div className="iconos-contenedor">
                <Link to="/formulario" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <img src={gophora} className="img-fluid" alt="matic" style={{maxWidth:'200px'}}/>
                </Link>
                    {/* <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={OpenSea} className="img-fluid p-3" alt="matic" style={{maxWidth:'100px'}}/>
                    </a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

NFTCards2.propTypes = {
    nftImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stitle: PropTypes.string.isRequired,
    l1: PropTypes.string.isRequired,
    l2: PropTypes.string.isRequired,
    l3: PropTypes.string.isRequired,
    l4: PropTypes.string.isRequired,
    l5: PropTypes.string,
    l6: PropTypes.string,
    l7: PropTypes.string,
    l8: PropTypes.string,
    // pb: PropTypes.string.isRequired,
    // pm: PropTypes.string.isRequired,

}

export default NFTCards2
