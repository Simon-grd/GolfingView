import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-gray-800 text-white p-4">
      <Link to="/">🏠 Accueil</Link>
      <Link to="/about">ℹ️ À propos</Link>
      <Link to="/contact">📞 Contact</Link>
    </nav>
  );
}
