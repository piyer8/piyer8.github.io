import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SideNav.css';

const sections = [
  { id: 'home',     label: 'Pranav Iyer', num: '00', color: 'white'  },
  { id: 'approach', label: 'My Approach', num: '01', color: 'orange' },
  { id: 'work',     label: 'Work',        num: '02', color: 'purple' },
  { id: 'about',    label: 'About me',    num: '03', color: 'orange' },
  { id: 'contact',  label: 'Contact',     num: '04', color: 'black'  },
];

function SideNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudy = location.pathname.startsWith('/case-study');
  const [active, setActive] = useState(isCaseStudy ? 'work' : 'home');

  useEffect(() => {
    if (isCaseStudy) {
      setActive('work');
      return;
    }

    const els = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [isCaseStudy, location.pathname]);

  const goTo = (id) => {
    if (isCaseStudy) {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sidenav">
      {sections.map(({ id, label, num, color }) => (
        <button
          key={id}
          className={`sidenav-item sidenav-item--${color}${active === id ? ' sidenav-item--active' : ''}`}
          onClick={() => goTo(id)}
        >
          <span className="sidenav-num">{num}</span>
          <span className="sidenav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default SideNav;
