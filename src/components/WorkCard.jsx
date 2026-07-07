import { Link } from 'react-router-dom';
import './WorkCard.css';

function WorkCard({ title, description, icons, path, bg, textColor }) {
  return (
    <Link
      to={path}
      className="wc"
      style={{ '--wc-bg': bg, '--wc-text': textColor }}
    >
      <div className="wc-icons">
        {icons.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={i > 0 ? 'wc-icon--secondary' : ''}
          />
        ))}
      </div>
      <div className="wc-reveal">
        <div className="wc-reveal-inner">
          <span className="wc-title">{title}</span>
          <span className="wc-desc">{description}</span>
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
