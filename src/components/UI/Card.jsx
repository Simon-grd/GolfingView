import { useTheme } from '../../contexts/ThemeContext';

export function Card({ children, className = '', ...props }) {
  const { darkMode } = useTheme();
  
  return (
    <div
      className={`position-relative ${className}`}
      style={{
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
      }}
      {...props}
    >
      {children}
    </div>
  );
}