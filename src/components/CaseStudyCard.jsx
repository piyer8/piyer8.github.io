import './CaseStudyCard.css';

function CaseStudyCard({ title, description, image, onClick }) {
  return (
    <div className="case-study-card" onClick={onClick}>
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
        <h2 className="case-study-title">{title}</h2>
        <p className="case-study-description">{description}</p>
      </div>
    </div>
  );
}

export default CaseStudyCard;

