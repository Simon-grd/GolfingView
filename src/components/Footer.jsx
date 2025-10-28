import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <h5>GolfingView</h5>
            <p>Votre plateforme dédiée au monde du golf</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <h6>Liens utiles</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <Link to="/about" className="text-white text-decoration-none">À propos</Link>
              <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <small>&copy; 2025 GolfingView. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}