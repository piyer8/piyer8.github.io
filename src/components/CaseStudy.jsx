import Header from './Header';
import './CaseStudy.css';

function CaseStudy({ title, description, thumbnail, slides = [], onBack }) {
  return (
    <div className="case-study">
      <Header onBack={onBack} />
      <div className="case-study-content">
        <div className="case-study-header">
          <div className="case-study-thumbnail">
            {thumbnail ? (
              <img src={thumbnail} alt={title} />
            ) : (
              <div className="thumbnail-placeholder">{title}</div>
            )}
          </div>
          <div className="case-study-overview">
            <h1 className="case-study-title">{title}</h1>
            <p className="case-study-description">{description}</p>
          </div>
        </div>
        
        <div className="case-study-divider"></div>
        
        <div className="case-study-slides">
          <div className="slides-container">
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide} alt={`${title} slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

