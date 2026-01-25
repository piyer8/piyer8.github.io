import Header from './Header';
import CaseStudyCard from './CaseStudyCard';
import './CaseStudies.css';

function CaseStudies({ onCaseStudyClick }) {
  const caseStudies = [
    {
      id: 1,
      title: 'Mayo Clinic',
      description: 'Helping Cancer patients report and track their symptoms',
      image: '/Mayo/Mayo-thumbnail.png',
      component: 'MayoClinic'
    },
    {
      id: 2,
      title: 'myTiro',
      description: 'Tracking device usage to better manage your time',
      image: '/placeholder-mytiro.jpg',
      component: null
    }
  ];

  return (
    <div className="case-studies">
      <Header />
      <div className="case-studies-container">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.id}
            title={study.title}
            description={study.description}
            image={study.image}
            onClick={() => study.component && onCaseStudyClick && onCaseStudyClick(study.component)}
          />
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;

