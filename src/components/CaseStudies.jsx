import WorkCard from './WorkCard';
import Section from './Section';
import './CaseStudies.css';

const works = [
  {
    title: 'Banfield Pet Hospital',
    description: 'Redesigning a sales funnel to increase conversions',
    icons: ['/icons/dogIcon.svg'],
    path: '/case-study/banfield',
    bg: '#C26B3A',
    textColor: '#fff',
  },
  {
    title: 'Mayo Clinic',
    description: 'Enabling better symptom reporting among cancer patients',
    icons: ['/icons/mayo.svg'],
    path: '/case-study/mayo-clinic',
    bg: '#F5ECD9',
    textColor: '#1B2A50',
  },
  // {
  //   title: 'IREAP',
  //   description: 'Helping renewable energy professionals make better decisions',
  //   icons: ['/icons/ireap.svg'],
  //   path: '/case-study/ireap',
  //   bg: '#C8B5E8',
  //   textColor: '#1B2A50',
  // },
  {
    title: 'HapViz',
    description: 'Visualizing haptic signal perceptions',
    icons: ['/icons/hapviz.svg'],
    path: '/case-study/hapviz',
    bg: '#B8DDF0',
    textColor: '#1B2A50',
  },
];

function CaseStudies() {
  return (
    <Section className="work section-reveal" id="work">
      <h2 className="work-heading fade-item">SELECTED WORK</h2>
      <hr className="work-rule fade-item" />
      <div className="work-grid fade-item">
        {works.map((item) => (
          <WorkCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}

export default CaseStudies;

