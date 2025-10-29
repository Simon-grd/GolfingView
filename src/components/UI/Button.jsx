import { useTheme } from '../../contexts/ThemeContext';

export function PrimaryButton({ children, onClick, className = '', ...props }) {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`btn fw-bold ${className}`}
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)'
          : 'linear-gradient(135deg, rgba(45,80,22,0.9) 0%, rgba(74,124,89,0.9) 100%)',
        border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.3)',
        color: '#ffffff',
        borderRadius: '12px',
        padding: '12px 24px',
        transition: 'all 0.3s ease'
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, className = '', ...props }) {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={{
        background: 'transparent',
        border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(45,80,22,0.2)',
        color: darkMode ? '#ffffff' : '#2d5016',
        borderRadius: '12px',
        padding: '12px 24px',
        transition: 'all 0.3s ease'
      }}
      {...props}
    >
      {children}
    </button>
  );
}