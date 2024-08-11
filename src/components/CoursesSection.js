import React from 'react';
import { Link } from 'react-router-dom';

function CoursesSection() {
  return (
    <section className="courses">
      <h2>Treinamentos e Cursos</h2>
      <div className="courses-grid">
        <Link to="/courses/valorant">
          <img src="Banner\ Twitter\ 2.png" alt="Valorant"/>
          <h3>Valorant</h3>
        </Link>
        
        <Link to="/courses/lol">
          <img src="Banner\ Twitter\ 2.png" alt="League of Legends"/>
          <h3>League of Legends</h3>
        </Link>
       
      </div>
    </section>
  );
}

export default CoursesSection;
