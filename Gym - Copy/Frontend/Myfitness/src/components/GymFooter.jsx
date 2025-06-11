import React from 'react';

const GymFooter = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.columns}>
          <div style={styles.col}>
            <h2 style={styles.logo}>🏋️ <span style={{ color: '#FF6347' }}>MY FITNESS GYM</span></h2>
            <p style={styles.description}>
              <em>Transform your body and mind</em> with us. <strong>Be stronger than your excuses.</strong>
            </p>
          </div>

          <div style={styles.col}>
            <h3 style={styles.colTitle}>📍 Location</h3>
            <p style={styles.text}>Barkat Complex</p>
            <p style={styles.text}>Hyderabad Road</p>
            <p style={styles.text}>Nanded, Maharashtra</p>
          </div>

          <div style={styles.col}>
            <h3 style={styles.colTitle}>📞 Contact</h3>
            <p style={styles.text}>
              <strong>Call/WhatsApp:</strong>{' '}
              <a href="https://wa.me/919284202829" style={styles.link}>9284202829</a>
            </p>
            <p style={styles.text}>
              <strong>Email:</strong>{' '}
              <a href="mailto:myfitnessgym145@gmail.com" style={styles.link}>myfitnessgym145@gmail.com</a>
            </p>
          </div>
        </div>

        <div style={styles.socials}>
          <a href="https://wa.me/919284202829" style={styles.socialBtn}>💬 WhatsApp</a>
          <a href="mailto:myfitnessgym145@gmail.com" style={styles.socialBtn}>📧 Email Us</a>
        </div>

        <p style={styles.copy}>&copy; {new Date().getFullYear()} My Fitness Gym. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f9f9f9', // light background
    padding: '60px 20px 40px',
    color: '#333',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    boxShadow: '0 -4px 10px rgba(0,0,0,0.05)',
  },
  content: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  columns: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    marginBottom: '40px',
  },
  col: {
    flex: '1 1 250px',
    minWidth: '220px',
    textAlign: 'left',
  },
  logo: {
    fontSize: '30px',
    fontWeight: '900',
    marginBottom: '10px',
    letterSpacing: '1.2px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  },
  colTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#FF6347', // tomato red accent
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  text: {
    fontSize: '15px',
    color: '#666',
    marginBottom: '6px',
  },
  link: {
    color: '#FF6347',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
  socials: {
    marginTop: '30px',
  },
  socialBtn: {
    display: 'inline-block',
    backgroundColor: '#FF6347',
    color: '#fff',
    margin: '10px',
    padding: '12px 26px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: '700',
    boxShadow: '0 4px 12px rgba(255, 99, 71, 0.4)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  copy: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#999',
    fontStyle: 'italic',
  },
};

// Add hover effects with inline styles trick (React doesn't support :hover inline, so using CSS would be better)
// For demonstration, you could add CSS classes or use styled-components for real projects.

export default GymFooter;
