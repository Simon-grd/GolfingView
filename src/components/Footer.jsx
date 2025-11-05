import { Link } from "react-router-dom";
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();
  
  return (
    <footer 
      className="py-4 mt-5 shadow-lg" 
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        color: darkMode ? '#ffffff' : '#000000'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <h5 style={{color: '#4a7c59', fontWeight: '700'}}>GolfingView</h5>
            <p style={{color: darkMode ? '#b0b0b0' : '#6c757d'}}>Votre plateforme dédiée au monde du golf</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <h6 style={{color: '#4a7c59', fontWeight: '600'}}>Liens utiles</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <Link 
                to="/about" 
                className="text-decoration-none" 
                style={{color: darkMode ? '#b0b0b0' : '#6c757d', transition: 'all 0.3s'}}
                onMouseEnter={(e) => e.target.style.color = '#4a7c59'}
                onMouseLeave={(e) => e.target.style.color = darkMode ? '#b0b0b0' : '#6c757d'}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="text-decoration-none" 
                style={{color: darkMode ? '#b0b0b0' : '#6c757d', transition: 'all 0.3s'}}
                onMouseEnter={(e) => e.target.style.color = '#4a7c59'}
                onMouseLeave={(e) => e.target.style.color = darkMode ? '#b0b0b0' : '#6c757d'}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-3" style={{borderColor: darkMode ? '#4a4a4a' : '#dee2e6'}} />
        <div className="text-center">
          <small style={{color: darkMode ? '#808080' : '#6c757d'}}>&copy; 2025 GolfingView. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}