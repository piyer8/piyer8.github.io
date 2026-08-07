import Section from './Section';
import './Approach.css';

function Approach() {
  return (
    <Section className="approach section-reveal" id="approach">
      <h2 className="approach-heading fade-item">MY APPROACH</h2>
      <hr className="approach-rule fade-item" />
      <p className="approach-body approach-body--secondary fade-item">
        I believe that all design choices are objective and happen through research and{' '}
        <span className="approach-accent">data</span>
      </p>
      <p className="approach-body approach-body--secondary fade-item">
        Being embedded in every stage from early discovery through to engineering handoff means
        decisions are grounded in real constraints, not assumptions. The best outcomes happen when
        design stays in the room the whole time.
      </p>
    </Section>
  );
}

export default Approach;
