import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px 0' }}>
      <p>&copy; {currentYear} My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;