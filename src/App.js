import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Certifique-se de definir corretamente os componentes que está importando
import Header from './components/Headertop';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CoursePage from './components/CoursePage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><HeroSection /><CoursesSection /><HowItWorksSection /></>} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Aqui está a exportação padrão
export default App;
