import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import MayoClinicCaseStudy from './components/MayoClinicCaseStudy';
import HapVizCaseStudy from './components/HapVizCaseStudy';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
          <div className="app-container">
            <Home />
            <CaseStudies />
          </div>
        </div>
      } />
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
    </Routes>
  );
}

export default App;
