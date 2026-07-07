import './Home.css';

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-body">
        <p className="hero-hello">Hello, I am</p>
        <h1 className="hero-name">PRANAV<br />IYER</h1>
      </div>
      <div className="hero-bar">
        <span className="hero-arrow">↓</span>
        <span>A designer who advocates for your customers — taking products from concept to deployment</span>
        <span className="hero-arrow">↓</span>
      </div>
    </section>
  );
}

export default Home;
