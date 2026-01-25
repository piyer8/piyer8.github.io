import './Header.css';

function Header({ onBack }) {
  const scrollToHome = () => {
    if (onBack) {
      onBack();
    } else {
      const app = document.querySelector('.app');
      if (app) {
        app.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <button className="header-name" onClick={scrollToHome}>
          Pranav Iyer
        </button>
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

