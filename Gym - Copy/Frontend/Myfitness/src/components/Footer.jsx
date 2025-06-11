import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#000', // Black background
    color: '#FFD700', // Golden text
    padding: '20px',
    textAlign: 'center',
    fontFamily: '"Georgia", serif',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '1px',
    borderTop: '2px solid #FFD700',
    boxShadow: '0 -2px 10px rgba(255, 215, 0, 0.2)',
    animation: 'fadeInUp 1s ease-in-out',
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <footer style={footerStyle}>
        Design and Developed by <strong>Er. Awais</strong> at <em>Tekisky Pvt Ltd</em>, Nanded, Maharashtra ✨
      </footer>
    </>
  );
};

export default Footer;
