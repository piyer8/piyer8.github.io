import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Pranav Iyer</h1>
        </div>
        <div className="home-description">
          <p>
            I am a designer, and visualization developer based in <strong>Chicago, IL</strong>
          </p>
        </div>
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;

