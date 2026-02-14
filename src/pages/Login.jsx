const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card bg-dark text-light p-4 border-secondary"
        style={{ width: "380px" }}
      >
        <h3 className="text-center fw-bold mb-4">
          Iniciar Sesión
        </h3>

        {/* LOGIN NORMAL */}
        <form>
          <div className="mb-3">
            <label className="form-label text-secondary">
              Correo
            </label>
            <input
              type="email"
              className="form-control bg-black text-light border-secondary"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-secondary">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control bg-black text-light border-secondary"
              placeholder="********"
            />
          </div>

          <button className="btn btn-light w-100 fw-bold mb-3">
            Entrar
          </button>
        </form>

        {/* SEPARADOR */}
        <div className="text-center text-secondary my-3">
          — o —
        </div>

        {/* LOGIN GOOGLE (VISUAL) */}
        <button className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            width="18"
          />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default Login;
