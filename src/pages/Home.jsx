const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold display-4">
        CompaRide
      </h1>

      <p className="text-center text-secondary fs-5 mt-3">
        Compara precios y tiempos entre Uber, Didi y otros servicios de transporte.
      </p>

      <div className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body text-center">
              <h4 className="fw-bold">Uber</h4>
              <p className="text-secondary mt-3">
                Consulta precios y tiempos estimados.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body text-center">
              <h4 className="fw-bold">Didi</h4>
              <p className="text-secondary mt-3">
                Compara tarifas disponibles.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body text-center">
              <h4 className="fw-bold">Más servicios</h4>
              <p className="text-secondary mt-3">
                Próximamente más plataformas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
