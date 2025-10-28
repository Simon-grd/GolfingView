import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="p-3 bg-light d-flex justify-content-around shadow-sm">
      <Link className="text-decoration-none fw-bold text-success" to="/">🏌️‍♂️ Accueil</Link>
      <Link className="text-decoration-none fw-bold text-success" to="/material">📰 Matériel & News</Link>
    </nav>
  );
}
