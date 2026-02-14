import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-black px-4">
      <span className="navbar-brand fw-bold">
        TransportApp
      </span>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">
          Inicio
        </Link>
        <Link className="btn btn-light text-dark" to="/login">
          Login
        </Link>
        <Link className="btn btn-outline-light me-2" to="/comparar">
        Comparar
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
