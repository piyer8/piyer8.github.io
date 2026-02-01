import { ArrowRight } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Pranav Iyer</h1>
        </div>
        <div className='bottom-right-container'>
          <div className="home-description">
            <p>
              I am a designer, and visualization developer based in <strong>Chicago, IL</strong>
            </p>
          </div>
          <div className="scroll-indicator">
            <ArrowRight size={48} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

