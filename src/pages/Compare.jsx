import "../styles/compare.css";

const Compare = () => {
  return (
    <div className="compare-container">
      <h1 className="title">Comparar viaje</h1>

      {/* FORMULARIO RUTA */}
      <div className="route-box">
        <input type="text" placeholder="Origen" />
        <input type="text" placeholder="Destino" />
        <button>Buscar opciones</button>
      </div>

      {/* PLANES */}
      <div className="plans">
        <div className="plan-card">
          <h2>Uber</h2>
          <p>Tiempo estimado: 15 min</p>
          <p>Precio: $120 MXN</p>
          <button>Seleccionar</button>
        </div>

        <div className="plan-card">
          <h2>Didi</h2>
          <p>Tiempo estimado: 18 min</p>
          <p>Precio: $105 MXN</p>
          <button>Seleccionar</button>
        </div>
      </div>
    </div>
  );
};

export default Compare;