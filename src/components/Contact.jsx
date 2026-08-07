import Section from './Section';
import './Contact.css';

function Contact() {
  return (
    <Section dark className="contact section-reveal" id="contact">
      <h2 className="contact-heading fade-item">CONTACT</h2>
      <hr className="contact-rule fade-item" />
      <div className="contact-body fade-item">
        <p className="contact-prompt">Want to work together?</p>
        <a href="mailto:ipranav7@gmail.com" className="contact-email">
          ipranav7@gmail.com
        </a>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/pranaviyer24/"
            className="contact-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1q5HK1I3nsCcWnXJ54xJhtUC3oGvLandQ/view?usp=drive_link"
            className="contact-social"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé
          </a>
        </div>
        <p className="contact-copyright">© 2026 Pranav Iyer</p>
      </div>
    </Section>
  );
}

export default Contact;
