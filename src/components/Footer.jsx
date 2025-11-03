import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white py-4 mt-5 shadow-lg" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <h5 style={{color: '#4a7c59', fontWeight: '700'}}>GolfingView</h5>
            <p style={{color: '#b0b0b0'}}>Votre plateforme dédiée au monde du golf</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <h6 style={{color: '#4a7c59', fontWeight: '600'}}>Liens utiles</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <Link 
                to="/about" 
                className="text-decoration-none" 
                style={{color: '#b0b0b0', transition: 'all 0.3s'}}
                onMouseEnter={(e) => e.target.style.color = '#4a7c59'}
                onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="text-decoration-none" 
                style={{color: '#b0b0b0', transition: 'all 0.3s'}}
                onMouseEnter={(e) => e.target.style.color = '#4a7c59'}
                onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-3" style={{borderColor: '#4a4a4a'}} />
        <div className="text-center">
          <small style={{color: '#808080'}}>&copy; 2025 GolfingView. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}