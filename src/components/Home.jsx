import './Home.css';

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <span className="hero-eyebrow">UX · Design · Visualization</span>
        <h1 className="hero-name">
          Pranav<br />
          Iyer<span className="hero-dot">.</span>
        </h1>
        <p className="hero-sub">Designer &amp; visualization developer — Chicago, IL</p>
      </div>
      <span className="hero-scroll">Scroll ↓</span>
    </section>
  );
}

export default Home;
