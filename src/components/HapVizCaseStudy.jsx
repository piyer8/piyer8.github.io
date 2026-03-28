import ScrollStory from './ScrollStory';
import StorySection from './StorySection';

function HapVizCaseStudy() {
  return (
    <ScrollStory nextProject={{ title: 'Fittrack', path: '/case-study/fittrack' }}>
      <StorySection
        isHero
        label="Interaction Design · Visualisation"
        heading="HapViz"
        body="A large-scale dataset of user-written descriptions for 256 vibrotactile haptic signals, turned into an interactive exploration tool for haptic designers, researchers, and developers."
        image="/HapViz/Header.png"
        bg="var(--stone)"
      />
      <StorySection
        label="01 — Background"
        heading="256 haptic signals, 7,680 human descriptions"
        body="Over the past year I collected 30 free-text descriptions per signal from participants — capturing how people perceive vibrotactile feedback across sensory, emotional, and associative dimensions. The result is one of the largest labelled haptic perception datasets of its kind."
        image="/HapViz/Slide 1.png"
        bg="var(--chalk)"
      />
      <StorySection
        label="02 — Process"
        heading="From raw text to structured perception maps"
        body="GPT-4 extracted key sensory, emotional, and associative keywords from each description. Emotional scores were calculated using the NRC Lexicon, and SBERT word embeddings with multidimensional scaling produced semantic maps where related words cluster together visually."
        image="/HapViz/Slide 2.png"
        bg="var(--stone)"
      />
      <StorySection
        label="03 — Tool"
        heading="Three views for exploring haptic perception"
        body="The React + D3.js interface offers a Gallery view for filtering signals by sensation or emotion, a Keyword exploration view with interactive scatter plots, and a Signal details view showing emotional scores and category breakdowns — all designed to help practitioners find the right signal faster."
        image="/HapViz/Slide 3.png"
        bg="var(--chalk)"
      />
    </ScrollStory>
  );
}

export default HapVizCaseStudy;
