import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BanfieldCaseStudy.css';

function BanfieldCaseStudy() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'view_case_study', {
        event_category: 'engagement',
        event_label: 'Banfield Pet Hospital',
      });
    }
  }, []);

  return (
    <div className="banfield-cs">
      <div className="banfield-inner">

        <Link to="/" className="banfield-back">← Back to work</Link>

        {/* Hero */}
        <div className="banfield-hero reveal">
          <div className="banfield-hero-thumb">
            <img src="/Banfield/thumbnail.png" alt="Banfield Pet Hospital" />
          </div>
          <div className="banfield-hero-card">
            <div className="banfield-pets">
              <div className="banfield-pet-avatar">
                <img src="/Banfield/dog.svg" alt="" />
              </div>
              <div className="banfield-pet-avatar">
                <img src="/Banfield/cat.svg" alt="" />
              </div>
            </div>
            <h1 className="banfield-title">Banfield Pet Hospital</h1>
            <div className="banfield-tags">
              <span>Product Design</span>
              <span>•</span>
              <span>Ecommerce</span>
            </div>
            <p className="banfield-hero-body">
              Banfield's Optimum Wellness Plans (<strong>OWP</strong>) drive the majority of the hospital chain's
              annual revenue. The online <strong>onboarding flow</strong> plays an important role in informing users
              about the different plans available and helping them choose the one that's best for them.
            </p>
          </div>
        </div>

        {/* Problem */}
        <div className="banfield-card banfield-card--light banfield-problem-full reveal">
          <h2 className="banfield-card-heading">Users Were dropping off</h2>
          <p className="banfield-card-body">
            Banfield onboards new customers through a multi-step web funnel: enter pet details, locate the nearest
            hospital, select a plan. The flow had too many steps, too many decisions, and not enough clarity about
            what users were actually getting. The drop-off was a symptom. The diagnosis was cognitive overload.
          </p>
          <img src="/Banfield/journey.png" alt="Onboarding journey map" className="banfield-journey" />
          <div className="banfield-research">
            <div className="banfield-research-text">
              <h3 className="banfield-card-heading">Research</h3>
              <p className="banfield-card-body">
                We set up Google Analytics to track when users were dropping off, and added a feedback modal for
                users who exited the flow asking them for their feedback directly.
              </p>
            </div>
            <img src="/Banfield/bf_img1.png" alt="Analytics dashboard" className="banfield-research-img" />
          </div>
        </div>

        {/* Changes */}
        <div className="banfield-card banfield-card--light banfield-changes reveal">
          <div className="banfield-changes-left">
            <div className="banfield-changes-text">
              <h2 className="banfield-card-heading">Design overhaul</h2>
              <p className="banfield-card-body banfield-changes-intro">We made the following changes</p>
              <ul className="banfield-changes-list">
                <li>Reduced the number of steps and decisions required to complete onboarding.</li>
                <li>Made plan selection feel personal rather than transactional.</li>
                <li>Updated the design system to be more modern.</li>
              </ul>
            </div>
            <img src="/Banfield/bf_img4.png" alt="Phone mockup" className="banfield-changes-phone" />
          </div>
          <div className="banfield-changes-right">
            <img src="/Banfield/bf_img2.png" alt="Screen designs" className="banfield-changes-screens" />
          </div>
        </div>

        {/* Process */}
        <div className="banfield-card banfield-card--orange banfield-process reveal">
          <img src="/Banfield/bf_img3.png" alt="Process screens" className="banfield-process-img" />
          <p className="banfield-card-body banfield-card-body--white">
            The redesign didn't move in a straight line. Stakeholder reviews, design critiques, and user testing all
            happened at the same time, feeding into each other instead of waiting their turn. Testing wasn't something
            we saved for the end to rubber-stamp our decisions; it's what kept us honest along the way. Users pointed
            out exactly where the flow fell apart, which kept us from shipping stuff based on assumptions we just felt
            confident about.
          </p>
        </div>

        {/* Conclusion */}
        <div className="banfield-card banfield-card--white banfield-conclusion reveal">
          <h2 className="banfield-card-heading">Conclusion</h2>
          <p className="banfield-card-body">
            Drop-off fell from 40% to 26%. That's 14 points of people who used to bail and now don't. Satisfaction
            scores went up too, but honestly the number that matters is simpler than that: way more people are
            finishing the funnel and actually becoming Banfield customers.
          </p>
          <p className="banfield-card-body">
            If this project taught me anything, it's that user testing isn't optional. It's the thing that turns a
            hunch into proof you can act on. And most of the design work that actually mattered here is stuff no one
            will ever notice: a step removed here, a decision collapsed there, making it dead obvious what someone's
            supposed to be looking at.
          </p>
        </div>

        {/* Footer nav */}
        <div className="banfield-footer-nav">
          <Link to="/" className="banfield-back-footer">← Back to work</Link>
          <Link to="/case-study/mayo-clinic" className="banfield-next">Next: Mayo Clinic →</Link>
        </div>

      </div>
    </div>
  );
}

export default BanfieldCaseStudy;
