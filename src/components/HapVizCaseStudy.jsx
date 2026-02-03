import CaseStudy from './CaseStudy';
import './CaseStudyCard.css';

const HapVizContent = () => (
  <div class="case-study-content">
    <div class="content-section">
      <h3>Background</h3>
      <p className="case-study-description">
        Over the past year, I collected a large dataset of user-written
        descriptions for 256 vibrotactile haptic signals — 30 free-text
        descriptions per signal — capturing how people perceived them across
        sensory, emotional, and associative dimensions. I designed and built an
        interactive web interface (React + D3.js) to help haptic designers,
        researchers, and developers explore this dataset and select signals that
        best fit their needs. The interface has three different views:
        <ul className="case-study-description">
        <li>
          <strong>Gallery view:</strong> Browse all signals with advanced
          filters by sensation, emotion, or association.
        </li>
        <li>
          <strong>Keyword exploration:</strong> Interactive scatter plots group
          keywords by meaning, revealing patterns in how signals are described.
        </li>
        <li>
          <strong>Signal details:</strong> View emotional scores, keywords, and
          category breakdowns for each signal.
        </li>
      </ul>
      </p>

    </div>

    <div className='content-section'>
      <h3>How it works</h3>
      <ul className="case-study-description">
        <li>
          <b>1.&nbsp;&nbsp;&nbsp;&nbsp;</b> Used GPT-4 to extract key sensory, emotional, and associative keywords from 7,680 descriptions.
        </li>
        <li>
          <b>2.&nbsp;&nbsp;&nbsp;&nbsp;</b> Grouped keywords into categories and calculated emotional scores using the NRC Lexicon (based on Plutchik’s emotion model)
        </li>
        <li>
          <b>3.&nbsp;&nbsp;&nbsp;&nbsp;</b> Created semantic maps with SBERT word embeddings + multidimensional scaling, so related words cluster together visually.
        </li>
      </ul>
    </div>
  </div>
);
function HapVizCaseStudy() {
  const slides = [
    '/HapViz/Slide 1.png',
    '/HapViz/Slide 2.png',
    '/HapViz/Slide 3.png'
  ]; // No slides for now
  const overview = "Over the past year, I collected a large-scale dataset of user-written descriptions for 256 vibrotactile haptic signals, capturing how people perceive them across sensory, emotional, and associative dimensions. I designed and built an interactive web tool using React and D3.js that enables haptic designers, researchers, and developers to explore this data, uncover patterns in perception, and select signals that best match their design goals."

  return (
    <CaseStudy
      title="HapViz"
      description="Tracking device usage to better manage your time"
      thumbnail="/HapViz/Header.png"
      slides={slides}
      overview={overview}
      content={<HapVizContent />}
    />
  );
}

export default HapVizCaseStudy;

