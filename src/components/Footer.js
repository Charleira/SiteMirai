import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Valorant Courses</h2>
        <p>Somos um clube de treinamento e aprendizado para gamers.</p>
      </div>
      <div className="footer-right">
        <nav>
          <a href="/">Home</a>
          <a href="/courses">Treinamentos</a>
          <a href="/contact">Contato</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
