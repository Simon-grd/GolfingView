import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../Logo_GolfingView.svg';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.background = darkMode 
      ? 'linear-gradient(135deg, #f5f7fa 0%, #e8f5e9 100%)'
      : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
  };

  return (
    <nav className="p-4 p-md-5 d-flex flex-column align-items-center position-relative overflow-hidden" style={{
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease'
    }}>
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="position-absolute"
        aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
        style={{
          top: '20px',
          right: '20px',
          background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,80,22,0.1)',
          border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.2)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '24px',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.background = darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(45,80,22,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,80,22,0.1)';
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(45,80,22,0.05)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '150px',
        height: '150px',
        background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(45,80,22,0.03)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }}></div>
      
      <div className="position-relative" style={{zIndex: 2}}>
        <img 
          src={logo} 
          alt="Logo" 
          className="logo mb-4" 
          style={{
            height: '100px', 
            width: 'auto', 
            filter: darkMode ? 'drop-shadow(0 4px 8px rgba(255,255,255,0.2)) brightness(1.2)' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
            animation: 'fadeIn 0.8s ease-in'
          }} 
        />
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center" style={{gap: '25px'}}>
          <Link 
            className="text-decoration-none fw-bold fs-5 px-4 py-3 text-center" 
            style={{
              color: darkMode ? '#ffffff' : '#000000',
              transition: 'all 0.3s ease',
              borderRadius: '12px',
              background: 'transparent',
              border: '1px solid transparent'
            }} 
            onMouseEnter={(e) => {
              e.target.style.background = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,80,22,0.08)';
              e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.border = '1px solid transparent';
            }}
            to="/"
            aria-label="Aller à la page d'accueil"
          >
            🏌️ Accueil
          </Link>
          <Link 
            className="text-decoration-none fw-bold fs-5 px-4 py-3 text-center" 
            style={{
              color: darkMode ? '#ffffff' : '#000000',
              transition: 'all 0.3s ease',
              borderRadius: '12px',
              background: 'transparent',
              border: '1px solid transparent'
            }} 
            onMouseEnter={(e) => {
              e.target.style.background = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,80,22,0.08)';
              e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.border = '1px solid transparent';
            }}
            to="/material"
            aria-label="Aller à la page Matériel et News"
          >
            📰 Matériel & News
          </Link>
        </div>
      </div>
    </nav>
  );
}