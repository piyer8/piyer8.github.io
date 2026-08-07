import Section from './Section';
import './About.css';

function About() {
  return (
    <Section className="about section-reveal" id="about">
      <h2 className="about-heading fade-item">ABOUT ME</h2>
      <hr className="about-rule fade-item" />
      <div className="about-grid fade-item">
        <div className="about-text">
          <p className="about-bio">
            I am a product designer, currently based in{' '}
            <span className="about-accent">Chicago, IL</span>
          </p>
          <p className="about-bio">
            Outside of work you can find me playing soccer, or headbanging at the nearest metal concert
          </p>
        </div>
        <div className="about-photo-wrap">
          <img src="/pranav.png" alt="Pranav Iyer" className="about-photo" />
        </div>
      </div>
    </Section>
  );
}

export default About;
