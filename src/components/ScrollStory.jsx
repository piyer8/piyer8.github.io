import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ScrollStory.css';

function ScrollStory({ children, nextProject }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { root: container, threshold: 0.3 }
    );

    container.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-story" ref={containerRef}>
      <Header />
      {children}
      <div className="story-nav">
        {nextProject && (
          <Link to={nextProject.path} className="story-next">
            Next project: {nextProject.title} →
          </Link>
        )}
        <Link to="/" className="story-back">← Back to work</Link>
      </div>
    </div>
  );
}

export default ScrollStory;
