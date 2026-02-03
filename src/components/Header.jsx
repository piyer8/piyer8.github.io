import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudyPage = location.pathname.startsWith('/case-study');

  const handleNameClick = (e) => {
    if (isCaseStudyPage) {
      // Navigate to home page
      navigate('/');
    } else {
      // On home page, scroll to top
      e.preventDefault();
      const app = document.querySelector('.app');
      if (app) {
        app.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-name" onClick={handleNameClick}>
          Pranav Iyer
        </Link>
        <nav className="header-nav">
          <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
            HOME
          </a>
          <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
            WORK
          </a>
          <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
            ABOUT
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

