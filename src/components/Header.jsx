import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudyPage = location.pathname.startsWith('/case-study');

  // On case study pages the scroll container is an inner div, not window,
  // so we just keep the header permanently in its scrolled state there.
  const [scrolled, setScrolled] = useState(isCaseStudyPage);

  useEffect(() => {
    if (isCaseStudyPage) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isCaseStudyPage]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    if (isCaseStudyPage) {
      navigate('/');
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    if (isCaseStudyPage) {
      navigate('/');
    } else {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={handleLogoClick}>PI.</Link>
        <nav className="header-nav">
          <a href="#work" className="nav-link" onClick={scrollTo('work')}>Work</a>
          <a href="#about" className="nav-link" onClick={scrollTo('about')}>About</a>
          <a href="#contact" className="nav-link" onClick={scrollTo('contact')}>Contact</a>
        </nav>
        <span className="header-status">
          Available for work <span className="status-dot">●</span>
        </span>
      </div>
    </header>
  );
}

export default Header;
