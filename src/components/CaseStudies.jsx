import { Link } from 'react-router-dom';
import './CaseStudies.css';

const works = [
  {
    index: '01',
    title: 'Banfield Pet Hospital',
    subtitle: 'Wellness Plan Onboarding',
    tags: 'UX Design, Product, Healthcare',
    image: '/Banfield/thumbnail.png',
    path: '/case-study/banfield',
  },
  {
    index: '02',
    title: 'Mayo Clinic',
    subtitle: 'Symptom Tracker',
    tags: 'UX Design, Data Visualisation, Healthcare',
    image: '/Mayo/Mayo-thumbnail.png',
    path: '/case-study/mayo-clinic',
  },
  {
    index: '03',
    title: 'HapViz',
    subtitle: 'Haptic Captioning',
    tags: 'Interaction Design, Visualisation',
    image: '/HapViz/Header.png',
    path: '/case-study/hapviz',
  },
  {
    index: '04',
    title: 'Fittrack',
    subtitle: 'Fitness App',
    tags: 'Mobile UX, Product Design',
    image: '/Fittrack/thumbnail.png',
    path: '/case-study/fittrack',
  },
];

function CaseStudies() {
  return (
    <section className="work reveal" id="work">
      <div className="work-inner">
        <span className="work-label">Selected work</span>
        <div className="work-list">
          {works.map((item) => (
            <Link key={item.index} to={item.path} className="work-row">
              <div className="work-thumbnail">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="work-index">{item.index}</span>
              <div className="work-title-group">
                <span className="work-title">{item.title}</span>
                <span className="work-subtitle">{item.subtitle}</span>
              </div>
              <span className="work-tags">{item.tags}</span>
              <span className="work-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
