import ScrollStory from './ScrollStory';
import StorySection from './StorySection';

const proto_text = "Patients fill out the tablet app upon arriving for their checkup, often fatigued or anxious from chemotherapy, which can affect the accuracy of their responses. To streamline the experience, nurses use a setup screen to customize the survey—selecting symptom presets based on the chemo drug or the patient's EHR number—and choose an avatar to help the patient feel more at ease. The UI uses calming colors and friendly fonts. Before the survey begins, patients are asked how they’re feeling; the system then prioritizes questions related to those symptoms first, capturing more accurate responses before fatigue sets in. The survey starts with one question at a time, gradually increasing the pace and including a progress bar to keep patients engaged. It also offers breaks and uses color-coded answer options to reduce cognitive load.";

function MayoClinicCaseStudy() {
  return (
    <ScrollStory nextProject={{ title: 'HapViz', path: '/case-study/hapviz' }}>
      <StorySection
        isHero
        label="UX Design · Data Visualisation · Healthcare"
        heading="Mayo Clinic"
        body="PRO-CTCAE is a comprehensive symptom-reporting tool, but its length and rigid format make accurate reporting difficult for cancer patients experiencing fatigue and cognitive strain."
        image="/Mayo/Mayo-thumbnail.png"
        bg="var(--stone)"
      />
      <StorySection
        label="01 — Problem"
        heading="Reporting fatigue makes accurate data impossible"
        body="PRO-CTCAE's length and rigid format make symptom reporting difficult for cancer patients experiencing cognitive strain. Symptoms are chronically underreported or forgotten between clinical visits."
        image="/Mayo/CTCAE.webp"
        bg="var(--chalk)"
      />
      <StorySection
        label="02 — Research"
        heading="Co-designing with patients and oncologists"
        body="We shadowed Mayo CLinic Phoenix doctors as they worked with patients and workshopped ideas, involving the doctors at every stage. We built and iteratively tested low-fidelity prototypes involving patients and oncologists at every stage."
        image="/Mayo/mayo_img2.png"
        bg="var(--stone)"
      />
      <StorySection
        label="03 — Prototyping"
        heading="In-clinic tablet app"
        body={proto_text}
        image="/Mayo/mayo_img3.png"
        bg="var(--stone)"
      />
      <StorySection
        label="03 — Prototyping"
        heading="Adaptive flow logic"
        body="The app uses AI to adaptively adjust the flow of questions depending on the symptoms experienced by the patient."
        image="/Mayo/mayo_img4.png"
        bg="var(--chalk)"
      />
      <StorySection
        label="04 — Companion App"
        heading="Reporting symptoms between sessions"
        body="The mobile app allows patients to report symptoms between sessions via a chatbot. They can indicate affected areas using a body diagram, upload photos, or describe their symptoms in text. If needed, they can also fill out the PRO-CTCAE or connect directly with their physician through the app."
        image="/Mayo/mayo_img5.png"
        bg="var(--stone)"
      />
      <StorySection
        label="05 — Visual Design"
        heading="A visual language built for calm"
        body="With patients already navigating fatigue and anxiety, the visual design had to do more than look good — it had to feel safe. We chose a palette of soft, muted tones to reduce visual stress, and paired Comfortaa with Georgia to balance approachability with medical credibility. Comfortaa's rounded forms keep the interface feeling friendly and low-pressure, while Georgia grounds the experience in the clinical seriousness it deserves."
        image="/Mayo/mayo_img6.png"
        bg="var(--stone)"
      />
      <StorySection
        heading="Conclusion"
        body="Designing for a clinical environment taught me that good UX rarely lives in the interface alone. Embedding myself alongside Mayo Clinic physicians surfaced a web of competing priorities:patient anxiety, clinician workflow, EHR constraints that outside research could never have fully captured. The most consequential design decisions weren't about color or layout; they were about trust, timing, and understanding what it means to feel unwell while being asked to describe how unwell you feel. This project cemented my belief that healthcare design demands genuine systems thinking, and that the best outcomes come from building with stakeholders and not just for them."
        bg="var(--chalk)"
      />
    </ScrollStory>
  );
}

export default MayoClinicCaseStudy;
