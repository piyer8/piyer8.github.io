import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import MayoClinicCaseStudy from './components/MayoClinicCaseStudy';
import HapVizCaseStudy from './components/HapVizCaseStudy';
import FittrackCaseStudy from './components/FittrackCaseStudy';
import BanfieldCaseStudy from './components/BanfieldCaseStudy';
import './App.css';
import Header from './components/Header';

function AppContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="above-fold">
        <Home />
        <CaseStudies />
      </div>
      <About />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/case-study/mayo-clinic" element={
        <div className="app case-study-app">
          <MayoClinicCaseStudy />
        </div>
      } />
      <Route path="/case-study/hapviz" element={
        <div className="app case-study-app">
          <HapVizCaseStudy />
        </div>
      } />
      <Route path="/case-study/fittrack" element={
        <div className="app case-study-app">
          <FittrackCaseStudy />
        </div>
      } />
      <Route path="/case-study/banfield" element={
        <div className="app case-study-app">
          <BanfieldCaseStudy />
        </div>
      } />
    </Routes>
  );
}

export default App;
