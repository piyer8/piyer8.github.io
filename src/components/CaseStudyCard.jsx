import './CaseStudyCard.css';

function CaseStudyCard({ title, description, image }) {
  return (
    <div className="case-study-card">
      <div className="case-study-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="case-study-placeholder">
            {title}
          </div>
        )}
      </div>
      <div className="case-study-info">
        <p className="case-study-title">{title}</p>
        <p className="case-study-description">{description}</p>
      </div>
    </div>
  );
}

export default CaseStudyCard;

