import { useEffect, useState } from 'react';
import './SideNav.css';

const sections = [
  { id: 'home',     label: 'Pranav Iyer', num: '00', color: 'white'  },
  { id: 'approach', label: 'My Approach', num: '01', color: 'orange' },
  { id: 'work',     label: 'Work',        num: '02', color: 'purple' },
  { id: 'about',    label: 'About me',    num: '03', color: 'orange' },
  { id: 'contact',  label: 'Contact',     num: '04', color: 'black'  },
];

function SideNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
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
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="sidenav">
      {sections.map(({ id, label, num, color }) => (
        <button
          key={id}
          className={`sidenav-item sidenav-item--${color}${active === id ? ' sidenav-item--active' : ''}`}
          onClick={() => scrollTo(id)}
        >
          <span className="sidenav-num">{num}</span>
          <span className="sidenav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default SideNav;
