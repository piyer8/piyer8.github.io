import { useState } from 'react';
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import MayoClinicCaseStudy from './components/MayoClinicCaseStudy';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState(null); // null for normal flow, 'MayoClinic' for case study

  const handleCaseStudyClick = (caseStudyName) => {
    setCurrentView(caseStudyName);
  };

  const handleBackToCaseStudies = () => {
    setCurrentView(null);
    // Scroll to case studies section after a brief delay
    setTimeout(() => {
      const app = document.querySelector('.app');
      if (app) {
        app.scrollTo({ left: window.innerWidth, behavior: 'smooth' });
      }
    }, 100);
  };

  // If viewing a case study, show it full screen
  if (currentView === 'MayoClinic') {
    return (
      <div className="app case-study-app">
        <MayoClinicCaseStudy onBack={handleBackToCaseStudies} />
      </div>
    );
  }

  // Otherwise show the normal horizontal scrolling layout
  return (
    <div className="app">
      <div className="app-container">
        <Home />
        <CaseStudies onCaseStudyClick={handleCaseStudyClick} />
      </div>
    </div>
  );
}

export default App;
