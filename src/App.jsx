import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import MayoClinicCaseStudy from './components/MayoClinicCaseStudy';
import HapVizCaseStudy from './components/HapVizCaseStudy';
import FittrackCaseStudy from './components/FittrackCaseStudy';
import './App.css';

function AppContent() {
  return (
    <div className="app">
      <Home />
      <CaseStudies />
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
    </Routes>
  );
}

export default App;
