import { Link } from "react-router-dom";
import "../styles/index.css";


const Home = () => {
  return (
    <div className="container mt-5">

      {/* TÍTULO */}
      <h1 className="text-center fw-bold display-4">
        CompaRide
      </h1>

      <p className="text-center text-secondary fs-5 mt-3">
        Compara precios y tiempos entre Uber, Didi y otros servicios de transporte.
      </p>

      {/* BARRA DE BÚSQUEDA */}
      <div className="d-flex justify-content-center mt-5">
        <div
          className="d-flex align-items-center border rounded-pill px-3 py-2 w-100"
          style={{ maxWidth: "600px" }}
        >
          <input
            type="text"
            className="form-control border-0"
            placeholder="¿A dónde vamos hoy?"
            style={{ boxShadow: "none" }}
          />

          <Link to="/comparar" className="btn btn-dark ms-2 rounded-pill">
            Buscar
          </Link>
        </div>
      </div>
      </div>


  );
};

export default Home;