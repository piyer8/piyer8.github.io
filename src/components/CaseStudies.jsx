import { Link } from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard';
import './CaseStudies.css';

function CaseStudies() {

  const caseStudies = [
    {
      id: 1,
      title: 'Mayo Clinic',
      description: 'Helping Cancer patients report and track their symptoms',
      image: '/Mayo/Mayo-thumbnail.png',
      path: '/case-study/mayo-clinic'
    },
    {
      id: 2,
      title: 'HapViz',
      description: 'Tracking device usage to better manage your time',
      image: '/HapViz/Header.png',
      path: '/case-study/hapviz'
    },
    {
      id: 3,
      title: 'Fittrack',
      description: 'Tracking progress to improve fittness motivation',
      image: '/Fittrack/thumbnail.png',
      path: '/case-study/fittrack'
    }
  ];

  return (
    <div className="case-studies">
      <div className="case-studies-content">
        <h1 className="case-studies-title">Case Studies</h1>
        <div className="case-studies-container">
        {caseStudies.map((study) => (
          study.path ? (
            <Link key={study.id} to={study.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <CaseStudyCard
                title={study.title}
                description={study.description}
                image={study.image}
              />
            </Link>
          ) : (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              description={study.description}
              image={study.image}
            />
          )
        ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;

