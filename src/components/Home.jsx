import Section from './Section';
import './Home.css';

function Home() {
  return (
    <Section className="hero" id="home">
      <div className="hero-body">
        <p className="hero-hello">Hello, I am</p>
        <h1 className="hero-name">PRANAV<br />IYER</h1>
        <p className="hero-tagline">
          I&apos;m a product designer who ships. Currently focused on AI-native products and complex, data-heavy workflows. I work across design and code.
        </p>
        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/pranaviyer24/"
            className="hero-link hero-link-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </a>
          <a
            href="mailto:ipranav7@gmail.com"
            className="hero-link hero-link-icon"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="4.5" width="19" height="15" />
              <path d="M2.5 5.5l9.5 8 9.5-8" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Home;
