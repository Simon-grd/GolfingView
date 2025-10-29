import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function SignupForm() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    console.log('Inscription:', formData);
    alert('Compte créé avec succès !');
    navigate('/');
  };

  return (
    <div className="container py-5 position-relative" style={{overflow: 'hidden'}}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(45,80,22,0.03)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(45,80,22,0.05)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>
      
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
                Créer un compte
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Prénom"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{
                        background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                        border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                        color: darkMode ? '#ffffff' : '#000000',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(45,80,22,0.3)';
                        e.target.style.boxShadow = darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(45,80,22,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Nom"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      style={{
                        background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                        border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                        color: darkMode ? '#ffffff' : '#000000',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(45,80,22,0.3)';
                        e.target.style.boxShadow = darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(45,80,22,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

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
                    onFocus={(e) => {
                      e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(45,80,22,0.3)';
                      e.target.style.boxShadow = darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(45,80,22,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="mb-3">
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
                    onFocus={(e) => {
                      e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(45,80,22,0.3)';
                      e.target.style.boxShadow = darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(45,80,22,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirmer le mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    style={{
                      background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                      border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                      color: darkMode ? '#ffffff' : '#000000',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(45,80,22,0.3)';
                      e.target.style.boxShadow = darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 0 10px rgba(45,80,22,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 fw-bold"
                  style={{
                    background: darkMode 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(45,80,22,0.9) 0%, rgba(74,124,89,0.9) 100%)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.3)',
                    color: '#ffffff',
                    borderRadius: '12px',
                    padding: '15px',
                    transition: 'all 0.3s ease',
                    boxShadow: darkMode 
                      ? '0 5px 15px rgba(255,255,255,0.1)'
                      : '0 5px 15px rgba(45,80,22,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = darkMode 
                      ? '0 8px 25px rgba(255,255,255,0.15)'
                      : '0 8px 25px rgba(45,80,22,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = darkMode 
                      ? '0 5px 15px rgba(255,255,255,0.1)'
                      : '0 5px 15px rgba(45,80,22,0.3)';
                  }}
                >
                  Créer mon compte
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}