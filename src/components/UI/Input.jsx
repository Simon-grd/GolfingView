import { useTheme } from '../../contexts/ThemeContext';

export function Input({ className = '', ...props }) {
  const { darkMode } = useTheme();
  
  return (
    <input
      className={`form-control ${className}`}
      style={{
        background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
        border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
        color: darkMode ? '#ffffff' : '#000000',
        borderRadius: '12px',
        transition: 'all 0.3s ease'
      }}
      {...props}
    />
  );
}

export function TextArea({ className = '', ...props }) {
  const { darkMode } = useTheme();
  
  return (
    <textarea
      className={`form-control ${className}`}
      style={{
        background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(45,80,22,0.05)',
        border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(45,80,22,0.15)',
        color: darkMode ? '#ffffff' : '#000000',
        borderRadius: '12px',
        transition: 'all 0.3s ease'
      }}
      {...props}
    />
  );
}