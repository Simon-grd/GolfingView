import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Auth() {
  const { darkMode } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
    }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="position-relative" style={{
              background: darkMode 
                ? 'linear-gradient(135deg, rgba(45,45,45,0.95) 0%, rgba(60,60,60,0.9) 50%, rgba(75,75,75,0.95) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 50%, rgba(233,236,239,0.95) 100%)',
              border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(45,80,22,0.1)',
              borderRadius: '20px',
              boxShadow: darkMode 
                ? '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.05)'
                : '0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(45,80,22,0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="card-body p-5 text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,80,22,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  margin: '0 auto 20px'
                }}>
                  👤
                </div>

                <h2 className="mb-4" style={{
                  color: darkMode ? '#ffffff' : '#000000'
                }}>
                  Accéder à votre compte
                </h2>
                
                <p className="mb-4" style={{
                  color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
                }}>
                  Connectez-vous pour accéder à votre profil et vos préférences
                </p>

                <div className="d-grid gap-3">
                  <Link 
                    to="/login" 
                    className="btn fw-bold"
                    style={{
                      background: darkMode 
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(45,80,22,0.9) 0%, rgba(74,124,89,0.9) 100%)',
                      border: 'none',
                      color: '#ffffff',
                      borderRadius: '12px',
                      padding: '15px',
                      textDecoration: 'none'
                    }}
                  >
                    Se connecter
                  </Link>
                  
                  <Link 
                    to="/signup" 
                    className="btn"
                    style={{
                      background: 'transparent',
                      border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.2)',
                      color: darkMode ? '#ffffff' : '#2d5016',
                      borderRadius: '12px',
                      padding: '15px',
                      textDecoration: 'none'
                    }}
                  >
                    Créer un compte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}