import { useTheme } from '../contexts/ThemeContext';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  const { darkMode } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a3a 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
    }}>
      <SignupForm />
    </div>
  );
}