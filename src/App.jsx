import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Approach from './components/Approach';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import SideNav from './components/SideNav';
import MayoClinicCaseStudy from './components/MayoClinicCaseStudy';
import HapVizCaseStudy from './components/HapVizCaseStudy';
import IREAPCaseStudy from './components/IREAPCaseStudy';
import BanfieldCaseStudy from './components/BanfieldCaseStudy';
import './App.css';

function AppContent() {
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    const sectionObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.section-reveal').forEach((el) => sectionObs.observe(el));

    return () => { revealObs.disconnect(); sectionObs.disconnect(); };
  }, []);

  return (
    <div className="app">
      <div className="layout">
        <SideNav />
        <main className="main-content">
          <Home />
          <Approach />
          <CaseStudies />
          <About />
          <Contact />
        </main>
      </div>
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
      <Route path="/case-study/ireap" element={
        <div className="app case-study-app">
          <IREAPCaseStudy />
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
