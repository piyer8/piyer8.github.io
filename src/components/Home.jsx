import './Home.css';
import AboutBox from './Home/About';
import Blurb from './Home/Blurb';
import ContactBox from './Home/Contact';

function Home() {
  return (
    <div className="home">
      
      <div className="home-content">
        <div className="home-text">
          <div className='home-header'>
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Pranav Iyer</h1>
          </div>
          <p className="home-description">
            I am a <strong>designer</strong>, and <strong>visualization developer</strong> based in <strong>Chicago, IL</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

