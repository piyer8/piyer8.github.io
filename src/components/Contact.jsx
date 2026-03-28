import './Contact.css';

function Contact() {
  return (
    <section className="contact reveal" id="contact">
      <div className="contact-inner">
        <h2 className="contact-heading">Want to work together?</h2>
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
    </section>
  );
}

export default Contact;
