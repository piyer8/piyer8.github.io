import Header from './Header';
import './CaseStudy.css';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ onClick }) => (
  <button className="back-button" onClick={onClick}>
    <ArrowLeft />
    See all projects
  </button>
);

function CaseStudy({ title, description, overview, thumbnail, content, slides = [] }) {
  return (
    <div className="case-study">
      <Header />
      <div className="case-study-content">
        <div className="case-study-header">
          <div className="case-study-thumbnail">
            {thumbnail ? (
              <img src={thumbnail} alt={title} />
            ) : (
              <div className="thumbnail-placeholder">{title}</div>
            )}
          </div>
          <div className="right-panel">
            <div className="case-study-overview">
              <h1 className="case-study-title">{title}</h1>
              <p className="case-study-description">{description}</p>
            </div>
            <div className='case-study-overview'>
              <h2>
                Overview
              </h2>
              <p className='case-study-description'>
                {overview}
              </p>
            </div>
          </div>
        </div>
        
        <div className="case-study-divider"></div>
        {content && content}
        <div className="case-study-slides">
          <div className="slides-container">
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide} alt={`${title} slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <BackButton onClick={() => window.history.back()} />
      </div>
    </div>
  );
}

export default CaseStudy;

