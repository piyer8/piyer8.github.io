import CaseStudy from './CaseStudy';

// Example implementation for Mayo Clinic case study
// Replace these placeholder paths with your actual image paths
function MayoClinicCaseStudy() {
  const slides = [
    '/Mayo/Slide 1.png',
    '/Mayo/Slide 2.png',
    '/Mayo/Slide 3.png'
  ];

  const overview = "PRO-CTCAE is a comprehensive symptom-reporting tool, but its length and rigid format make accurate reporting difficult for cancer patients experiencing fatigue and cognitive strain. Symptoms are often underreported or forgotten between visits. To address this, me and a team worked with Doctors from The Mayo Clinic, Phoenix to design an in-clinic tablet experience alongside a companion at-home app that enables reliable symptom tracking";

  return (
    <CaseStudy
      title="Mayo Clinic"
      description="Helping Cancer patients report and track their symptoms"
      thumbnail="/Mayo/Mayo-thumbnail.png"
      slides={slides}
      overview={overview}
    />
  );
}

export default MayoClinicCaseStudy;

