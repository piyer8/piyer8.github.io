import { Link } from 'react-router-dom';
import Header from './Header';
import './CaseStudy.css';

function CaseStudy({ title, description, overview, thumbnail, content, slides = [], nextProject }) {
  return (
    <div className="cs">
      <Header />
      <div className="cs-body">

        {/* Hero */}
        <div className="cs-hero">
          <div className="cs-hero-inner">
            <h1 className="cs-title">{title}</h1>
            <span className="cs-tags">{description}</span>
          </div>
          {thumbnail && (
            <div className="cs-hero-image">
              <img src={thumbnail} alt={title} />
            </div>
          )}
        </div>

        {/* Overview */}
        {overview && (
          <div className="cs-section">
            <span className="cs-section-label">Overview</span>
            <p className="cs-body-text">{overview}</p>
          </div>
        )}

        {/* Custom content sections */}
        {content && (
          <div className="cs-custom-content">
            {content}
          </div>
        )}

        {/* Slides */}
        {slides.length > 0 && (
          <div className="cs-slides">
            {slides.map((slide, index) => (
              <div key={index} className="cs-slide">
                <img src={slide} alt={`${title} slide ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="cs-footer-nav">
          {nextProject && (
            <Link to={nextProject.path} className="cs-next">
              Next project: {nextProject.title} →
            </Link>
          )}
          <Link to="/" className="cs-back">← Back to work</Link>
        </div>

      </div>
    </div>
  );
}

export default CaseStudy;
