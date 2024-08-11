import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <h1>Valorant Courses</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/CoursePage">Treinamentos</Link>
        <Link to="/Contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
