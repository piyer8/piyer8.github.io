import './About.css';

const capabilities = [
  'UX Research',
  'Interaction Design',
  'Data Visualisation',
  'Figma · Framer',
  'React · D3.js',
];

function About() {
  return (
    <section className="about reveal" id="about">
      <div className="about-inner">
        <span className="about-label">About</span>
        <div className="about-grid">
          <p className="about-bio">
            I'm a designer and visualization developer based in Chicago. I work at the intersection of data, interaction, and clarity — turning complex systems into experiences people actually want to use.
          </p>
          <ul className="capabilities-list">
            {capabilities.map((item) => (
              <li key={item} className="capability-item">
                <span className="capability-dash">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
