import CaseStudy from './CaseStudy';

const FittrackContent = () => (
  <>
    <div className="content-section">
      <h3>The Problem</h3>
      <p className="case-study-description">
        For many new fitness enthusiasts, determining the right routines and finding the necessary guidance to begin can be challenging. This often results in feelings of overwhelm, causing some to abandon their fitness goals altogether. FitTrack provides a solution by allowing users to monitor their fitness and eating habits while tracking their progress across all key areas.
      </p>
    </div>

    <div className="content-section">
      <h3>The Objective</h3>
      <p className="case-study-description">
        To guide users through a fitness routine and help them stay motivated.
      </p>
    </div>

    <div className="content-section">
      <h3>Research</h3>
      <p className="case-study-description">
        For my initial research, I went through a few existing research papers on exercise and motivation. According to the Self-Determination Theory proposed by Duncan, L.R., Hall, C.R., Wilson, P.M., et al. in their paper on Exercise motivation — exercise routines are initially motivated by extrinsic or external factors such as wanting to lose weight or wanting to ease body aches, but sticking with a routine long-term is motivated by intrinsic or internal factors such as the perceived sense of progress and the ensuing satisfaction.
      </p>
    </div>

    <div className="content-section">
      <h3>User interviews</h3>
      <p className="case-study-description">
        I conducted interviews with five individuals who exercised irregularly to understand their reasons for following fitness routines and how they tracked their progress. To uncover what motivates them, I applied the 5 Whys technique, delving into the root causes of their motivations. Four out of the five participants cited boosting self-confidence as their primary reason for exercising, while the fifth focused on improving their long-term health.
      </p>
      <p className="case-study-description">
        Those who tracked their progress consistently mentioned using separate apps to monitor exercise routines and nutritional intake. They also noted that many apps lack guidance on performing exercises correctly to optimize results.
      </p>
    </div>

    <div className="content-section">
      <h3>Designing the app</h3>
      <p className="case-study-description">
        I decided that the app would track progress regarding exercises and nutritional intake, such as calories and macros. I proceeded to create a user flow, following which I created sketches and low-fidelity wireframes to test out ideas.
      </p>
    </div>

    <div className="content-section">
      <h3>High fidelity prototypes</h3>
      <h4>Sign-up &amp; onboarding</h4>
      <p className="case-study-description">
        These screens allow users to sign up and provide preliminary information about themselves — experience level, height, and weight — so the app can provide tailor-made food and workout recommendations.
      </p>
      <h4>Home and Profile</h4>
      <p className="case-study-description">
        The Home page provides frequently checked information about caloric intake and gives quick recommendations for food and workouts. The profile page contains statistics of past workouts and lets users upload progress pictures to stay motivated.
      </p>
      <h4>Food &amp; Calories</h4>
      <p className="case-study-description">
        These pages provide food recommendations, allow users to track their nutrition for the day, and add meals to their daily nutrition log.
      </p>
      <h4>Workouts</h4>
      <p className="case-study-description">
        These pages recommend workout routines with difficulty levels and weekly day requirements. Individual workouts include instructional videos and rep/time tracking.
      </p>
    </div>

    <div className="content-section">
      <h3>Conclusions</h3>
      <p className="case-study-description">
        Through this project I learned the importance of user research and how it narrows down root problems, providing a sense of direction during the design process. Future iterations would benefit from user testing to refine the design further.
      </p>
    </div>
  </>
);

function FittrackCaseStudy() {
  const overview = "For many new fitness enthusiasts, determining the right routines and finding the necessary guidance to begin can be challenging. This often results in feelings of overwhelm, causing some to abandon their fitness goals altogether. FitTrack provides a solution by allowing users to monitor their fitness and eating habits while tracking their progress across all key areas.";

  return (
    <CaseStudy
      title="Fittrack"
      description="Mobile UX · Product Design"
      thumbnail="/Fittrack/thumbnail.png"
      slides={[]}
      overview={overview}
      content={<FittrackContent />}
      nextProject={{ title: 'Mayo Clinic', path: '/case-study/mayo-clinic' }}
    />
  );
}

export default FittrackCaseStudy;
