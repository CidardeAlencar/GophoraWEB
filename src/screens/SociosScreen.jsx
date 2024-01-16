import socios from "../assets/socios.png";

function SociosScreen() {
  return (
    <section className="home-section font-class font-sizesm mb-5" id="socios">
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-warning mb-5">Socios Estratégicos</h1>
            <img src={socios} alt="socios estrategicos" className="img-fluid" />
        </div>
    </section>
  )
}

export default SociosScreen