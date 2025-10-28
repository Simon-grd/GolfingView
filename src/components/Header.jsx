import { Link } from "react-router-dom";
import logo from '../Logo_GolfingView.svg';

export default function Header() {
  return (
    <nav className="p-3 p-md-4 bg-white d-flex flex-column align-items-center shadow">
      <img src={logo} alt="Logo" className="logo mb-3 mb-md-0" style={{height: '80px', width: 'auto'}} />
      <div className="d-flex flex-column flex-md-row align-items-center" style={{gap: '20px'}}>
        <Link 
          className="text-decoration-none fw-bold text-dark fs-5 fs-md-4 px-2 px-md-3 py-2 rounded text-center" 
          style={{transition: 'all 0.3s'}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.1)'} 
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} 
          to="/"
        >
          Accueil
        </Link>
        <Link 
          className="text-decoration-none fw-bold text-dark fs-5 fs-md-4 px-2 px-md-3 py-2 rounded text-center" 
          style={{transition: 'all 0.3s'}} 
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.1)'} 
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} 
          to="/material"
        >
          Matériel & News
        </Link>
      </div>
    </nav>
  );
}