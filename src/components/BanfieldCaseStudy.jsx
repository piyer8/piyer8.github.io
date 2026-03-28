import ScrollStory from './ScrollStory';
import StorySection from './StorySection';

function BanfieldCaseStudy() {
  return (
    <ScrollStory nextProject={{ title: 'Mayo Clinic', path: '/case-study/mayo-clinic' }}>
      <StorySection
        isHero
        label="UX Design · Product · Healthcare"
        heading="Banfield Pet Hospital"
        body="More than 40% of users were abandoning Banfield's wellness plan onboarding before completing it. Behind that number: $700M in annual revenue, and a funnel that was asking too much of the people using it."
        image="/Banfield/thumbnail.png"
        bg="var(--stone)"
      />
      <StorySection
        label="01 — Problem"
        heading="A $700M drop-off problem"
        body="Banfield onboards new customers through a multi-step web funnel: enter pet details, locate the nearest hospital, select a plan. The flow had too many steps, too many decisions, and not enough clarity about what users were actually getting. The drop-off was a symptom. The diagnosis was cognitive overload."
        image="/Banfield/bf_img1.png"
        bg="var(--chalk)"
      />
      <StorySection
        label="02 — Goals"
        heading="Three things needed to change"
        body="Reduce the number of steps and decisions required to complete onboarding. Make plan selection feel personal rather than transactional. Bring the visual design up to the standard users expect from a modern healthcare brand."
        image="/Banfield/bf_img2.png"
        bg="var(--stone)"
      />
      <StorySection
        label="03 — Approach"
        heading="Testing as a reality check, not a final step"
        body="The redesign was iterative — stakeholder reviews, design critiques, and user testing running in parallel rather than in sequence. Testing wasn't a final checkpoint; it was how we stayed honest. Users told us exactly where the flow broke down, which saved us from shipping confident assumptions."
        image="/Banfield/bf_img3.png"
        bg="var(--chalk)"
      />
      <StorySection
        label="04 — Redesign"
        heading="Lead with a recommendation, not a menu"
        body="The most consequential change was to the plan selection screen. The old design presented users with a list of plans and expected them to self-sort. The new design leads with a single recommended plan — derived from the pet details already entered — and lets users adjust features to see a tailored alternative. Fewer options on screen. Fewer moments of 'wait, which one do I want?' The rest of the flow was tightened to match: fewer steps, clearer progress, less noise."
        image="/Banfield/bf_img4.png"
        bg="var(--stone)"
      />
      <StorySection
        heading="Conclusion"
        body="Drop-off fell from 40% to 26% — a 14-point reduction. User satisfaction scores improved. The number that matters most: significantly more people are completing the funnel and becoming Banfield customers. The project reinforced something worth stating plainly — user testing isn't a nice-to-have. It's the mechanism that turns design intuition into design evidence. The Banfield project was a reminder that the most valuable design work is often invisible — removing steps, collapsing decisions, clarifying what users are actually looking at. A 14-point drop in abandonment doesn't come from a visual refresh. It comes from understanding why people leave, and having the conviction to fix it structurally rather than cosmetically."
        bg="var(--stone)"
      />
    </ScrollStory>
  );
}

export default BanfieldCaseStudy;
