const Compare = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">
        Planifica tu viaje
      </h2>

      {/* FORMULARIO DE RUTA */}
      <div className="card bg-dark text-light border-secondary p-4 mb-5">
        <h5 className="fw-bold mb-3">Ruta del viaje</h5>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label text-secondary">Origen</label>
            <input
              type="text"
              className="form-control bg-black text-light border-secondary"
              placeholder="Ej. Centro, Ciudad"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label text-secondary">Destino</label>
            <input
              type="text"
              className="form-control bg-black text-light border-secondary"
              placeholder="Ej. Aeropuerto"
            />
          </div>
        </div>

        <button className="btn btn-light fw-bold mt-2">
          Buscar viajes
        </button>
      </div>

      {/* SELECCIÓN DE PLATAFORMA */}
      <h4 className="fw-bold mb-3">Selecciona una plataforma</h4>

      <div className="row g-4">
        {/* UBER */}
        <div className="col-md-6">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body">
              <h5 className="fw-bold">Uber</h5>
              <p className="text-secondary">
                Elige el tipo de servicio
              </p>

              <select className="form-select bg-black text-light border-secondary mb-3">
                <option>UberX</option>
                <option>Uber Comfort</option>
                <option>Uber Black</option>
              </select>

              <button className="btn btn-outline-light w-100">
                Seleccionar Uber
              </button>
            </div>
          </div>
        </div>

        {/* DIDI */}
        <div className="col-md-6">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body">
              <h5 className="fw-bold">Didi</h5>
              <p className="text-secondary">
                Elige el tipo de servicio
              </p>

              <select className="form-select bg-black text-light border-secondary mb-3">
                <option>Didi Express</option>
                <option>Didi Confort</option>
                <option>Didi Premium</option>
              </select>

              <button className="btn btn-outline-light w-100">
                Seleccionar Didi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
