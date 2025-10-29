import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { darkMode } = useTheme();
  const { user, logout, login } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const handleEdit = () => {
    setEditData({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone || '',
      handicap: user.handicap || '',
      favoriteClub: user.favoriteClub || '',
      profilePicture: user.profilePicture || ''
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...editData };
    
    // Mettre à jour dans localStorage
    const savedUsers = JSON.parse(localStorage.getItem('golfingview_users') || '[]');
    const userIndex = savedUsers.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
      savedUsers[userIndex] = updatedUser;
      localStorage.setItem('golfingview_users', JSON.stringify(savedUsers));
    }
    
    login(updatedUser);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  if (!user) {
    return (
      <div style={{
        minHeight: '100vh',
        background: darkMode 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{ color: darkMode ? '#ffffff' : '#000000' }}>Veuillez vous connecter pour accéder à votre profil.</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
    }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="text-center mb-4" style={{
              color: darkMode ? '#ffffff' : '#2d5016'
            }}>Mon Profil</h2>
            
            <div className="card border-0 shadow-sm" style={{
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
              <div className="card-body p-4" style={{
                color: darkMode ? '#ffffff' : '#000000'
              }}>
                <div className="text-center mb-4">
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,80,22,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '40px',
                      margin: '0 auto 15px',
                      position: 'relative',
                      cursor: isEditing ? 'pointer' : 'default',
                      overflow: 'hidden'
                    }}
                    onClick={isEditing ? () => document.getElementById('profilePicture').click() : undefined}
                  >
                    {user.profilePicture ? (
                      <img 
                        src={user.profilePicture} 
                        alt="Photo de profil" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                      />
                    ) : (
                      '👤'
                    )}
                    {isEditing && (
                      <div style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '5px',
                        background: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(45,80,22,0.9)',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        border: '2px solid ' + (darkMode ? '#2d2d2d' : '#ffffff')
                      }}>
                        📷
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <input
                      id="profilePicture"
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            setEditData({
                              ...editData,
                              profilePicture: event.target.result
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  )}
                  <h4>{user.firstName} {user.lastName}</h4>
                  <p style={{ color: darkMode ? 'rgba(255,255,255,0.7)' : '#6c757d' }}>Membre depuis {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="mb-3">
                  <strong>Email :</strong>
                  <p>{user.email}</p>
                </div>

                {isEditing ? (
                  <>
                    <div className="mb-3">
                      <strong>Prénom :</strong>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control mt-1"
                        value={editData.firstName}
                        onChange={handleChange}
                        style={{
                          background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                          border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                          color: darkMode ? '#ffffff' : '#000000',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <strong>Nom :</strong>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control mt-1"
                        value={editData.lastName}
                        onChange={handleChange}
                        style={{
                          background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                          border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                          color: darkMode ? '#ffffff' : '#000000',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <strong>Téléphone :</strong>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control mt-1"
                        value={editData.phone}
                        onChange={handleChange}
                        style={{
                          background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                          border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                          color: darkMode ? '#ffffff' : '#000000',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <strong>Handicap :</strong>
                      <input
                        type="number"
                        name="handicap"
                        className="form-control mt-1"
                        value={editData.handicap}
                        onChange={handleChange}
                        min="0"
                        max="54"
                        style={{
                          background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                          border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                          color: darkMode ? '#ffffff' : '#000000',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <div className="mb-4">
                      <strong>Club favori :</strong>
                      <input
                        type="text"
                        name="favoriteClub"
                        className="form-control mt-1"
                        value={editData.favoriteClub}
                        onChange={handleChange}
                        style={{
                          background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
                          border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
                          color: darkMode ? '#ffffff' : '#000000',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3">
                      <strong>Téléphone :</strong>
                      <p>{user.phone || 'Non renseigné'}</p>
                    </div>

                    <div className="mb-3">
                      <strong>Handicap :</strong>
                      <p>{user.handicap || 'Non renseigné'}</p>
                    </div>

                    <div className="mb-4">
                      <strong>Club favori :</strong>
                      <p>{user.favoriteClub || 'Non renseigné'}</p>
                    </div>
                  </>
                )}

                <div className="d-grid gap-2">
                  {isEditing ? (
                    <>
                      <button 
                        className="btn" 
                        onClick={handleSave}
                        style={{
                          background: darkMode 
                            ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
                            : 'linear-gradient(135deg, rgba(45,80,22,0.9) 0%, rgba(74,124,89,0.9) 100%)',
                          border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.3)',
                          color: '#ffffff',
                          borderRadius: '12px',
                          padding: '12px'
                        }}
                      >
                        Sauvegarder
                      </button>
                      <button 
                        className="btn" 
                        onClick={() => setIsEditing(false)}
                        style={{
                          background: 'transparent',
                          border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.2)',
                          color: darkMode ? '#ffffff' : '#2d5016',
                          borderRadius: '12px',
                          padding: '12px'
                        }}
                      >
                        Annuler
                      </button>
                    </>
                  ) : (
                    <button 
                      className="btn" 
                      onClick={handleEdit}
                      style={{
                        background: darkMode 
                          ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(45,80,22,0.9) 0%, rgba(74,124,89,0.9) 100%)',
                        border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.3)',
                        color: '#ffffff',
                        borderRadius: '12px',
                        padding: '12px'
                      }}
                    >
                      Modifier le profil
                    </button>
                  )}
                  <button 
                    className="btn" 
                    onClick={() => {
                      logout();
                      navigate('/auth');
                    }}
                    style={{
                      background: 'transparent',
                      border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.2)',
                      color: darkMode ? '#ffffff' : '#2d5016',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                  >
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}