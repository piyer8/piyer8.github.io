import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.state]);

  return (
    <>
      <Home />
      <Approach />
      <CaseStudies />
      <About />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
  }, [location.pathname]);

  return (
    <div className="app">
      <div className="layout">
        <SideNav />
        <main className="main-content" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/case-study/mayo-clinic" element={<MayoClinicCaseStudy />} />
            <Route path="/case-study/hapviz" element={<HapVizCaseStudy />} />
            <Route path="/case-study/ireap" element={<IREAPCaseStudy />} />
            <Route path="/case-study/banfield" element={<BanfieldCaseStudy />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
