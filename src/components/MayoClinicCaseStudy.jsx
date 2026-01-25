import CaseStudy from './CaseStudy';

// Example implementation for Mayo Clinic case study
// Replace these placeholder paths with your actual image paths
function MayoClinicCaseStudy({ onBack }) {
  const slides = [
    '/Mayo/Slide 1.png',
    '/Mayo/Slide 2.png',
    '/Mayo/Slide 3.png'
  ];

  return (
    <CaseStudy
      title="Mayo Clinic"
      description="Helping Cancer patients report and track their symptoms"
      thumbnail="/Mayo/Mayo-thumbnail.png" // Replace with actual thumbnail path
      slides={slides}
      onBack={onBack}
    />
  );
}

export default MayoClinicCaseStudy;

