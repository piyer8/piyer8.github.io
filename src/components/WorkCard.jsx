import { Link, useNavigate } from 'react-router-dom';
import './WorkCard.css';

function WorkCard({ title, description, icons, path, bg, textColor }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const main = document.querySelector('.main-content');
    if (main) {
      main.style.transition = 'opacity 250ms ease, transform 250ms ease';
      main.style.opacity = '0';
      main.style.transform = 'translateY(-8px)';
    }
    setTimeout(() => navigate(path), 260);
  }

  return (
    <Link
      to={path}
      onClick={handleClick}
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
