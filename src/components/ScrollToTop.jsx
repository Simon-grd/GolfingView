import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const checkDarkMode = () => {
      const bgColor = window.getComputedStyle(document.body).background;
      setIsDark(bgColor.includes('1a1a1a') || bgColor.includes('2d2d2d'));
    };

    window.addEventListener('scroll', toggleVisibility);
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    
    checkDarkMode();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="position-fixed fw-bold"
          aria-label="Retour en haut de page"
          style={{
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            animation: 'fadeIn 0.4s ease-out',
            background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(45,80,22,0.08)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '2px solid rgba(45,80,22,0.3)',
            padding: '12px 20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            fontSize: '20px',
            color: isDark ? '#ffffff' : '#000000'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(45,80,22,0.15)';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(45,80,22,0.08)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}