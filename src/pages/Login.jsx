import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { darkMode } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si l'utilisateur existe déjà
    const savedUsers = JSON.parse(localStorage.getItem('golfingview_users') || '[]');
    const existingUser = savedUsers.find(u => u.email === formData.email);
    
    if (existingUser) {
      login(existingUser);
      navigate('/profile');
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
    }}>
      <div className="container py-5 position-relative" style={{overflow: 'hidden'}}>
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
              backdropFilter: 'blur(10px)',
              zIndex: 2
            }}>
              <div className="card-body p-4">
                <h2 className="text-center mb-4" style={{
                  color: darkMode ? '#ffffff' : '#000000'
                }}>
                  Se connecter
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                        border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                        color: darkMode ? '#ffffff' : '#000000',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Mot de passe"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={{
                        background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                        border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                        color: darkMode ? '#ffffff' : '#000000',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 fw-bold mb-3"
                    style={{
                      background: darkMode 
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(45,80,22,0.9) 0%, rgba(74,124,89,0.9) 100%)',
                      border: 'none',
                      color: '#ffffff',
                      borderRadius: '12px',
                      padding: '15px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Se connecter
                  </button>
                </form>

                <div className="text-center" style={{
                  color: darkMode ? '#ffffff' : '#000000'
                }}>
                  <p>Pas encore de compte ?</p>
                  <Link 
                    to="/signup" 
                    className="btn"
                    style={{
                      background: 'transparent',
                      border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.2)',
                      color: darkMode ? '#ffffff' : '#2d5016',
                      borderRadius: '12px',
                      padding: '12px 24px',
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