import './Section.css';

function Section({ id, className, dark, children }) {
  return (
    <section
      id={id}
      className={`section${dark ? ' section--dark' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </section>
  );
}

export default Section;
