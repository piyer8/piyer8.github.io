import CaseStudy from './CaseStudy';
import './CaseStudyCard.css';

const FittrackContent = () => (
  <div className="case-study-content">
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
        For my initial research, I went through a few existing research papers on exercise and motivation. According to the Self-Determination Theory proposed by Duncan, L.R., Hall, C.R., Wilson, P.M., et al. in their paper on Exercise motivation — exercise routines are initially motivated by extrinsic or external factors such as wanting to lose weight or wanting to ease body aches, but to sticking with a routine for a long time is motivated by intrinsic or internal factors such as the perceived sense of progress and the ensuing satisfaction.
      </p>
    </div>

    <div className="content-section">
      <h3>User interviews</h3>
      <p className="case-study-description">
        I conducted interviews with five individuals who exercised irregularly to understand their reasons for following fitness routines and how they tracked their progress. To uncover what motivates them, I applied the 5 Whys technique, delving into the root causes of their motivations, as illustrated in the accompanying flowchart. Four out of the five participants cited boosting self-confidence as their primary reason for exercising, while the fifth focused on improving their long-term health.
      </p>
      <p className="case-study-description">
        I asked the interviewees whether they tracked their fitness activities and if they used any apps for this purpose. Those who tracked their progress consistently mentioned using separate apps to monitor their exercise routines and nutritional intake. They also noted that many apps lack guidance on performing exercises correctly to optimize results.
      </p>
    </div>

    <div className="content-section">
      <h3>Designing the app</h3>
      <p className="case-study-description">
        I decided that the app would track progress regarding exercises and nutritional intake, such as calories and macros. Tracking progress is important to meet the intrinsic requirements for staying motivated. I proceeded to create a user flow, following which I created sketches and low fidelity wireframes to test out ideas.
      </p>
    </div>

    <div className="content-section">
      <h3>High fidelity prototypes</h3>
      
      <h4>Sign-up & onboarding</h4>
      <p className="case-study-description">
        These screens allow users to sign-up for the app and to provide some preliminary information about themselves such as previous experience, height and weight so that the app can provide tailor-made food and workout recommendations to them.
      </p>

      <h4>Home and Profile</h4>
      <p className="case-study-description">
        The Home page provides frequently checked information about caloric intake and gives quick recommendations for food and workouts. The profile page contains statistics of past workouts and also provides for the user to upload progress pictures.
      </p>
      <p className="case-study-description">
        This allows users to view their progress over the months in order to stay motivated.
      </p>

      <h4>Food & Calories</h4>
      <p className="case-study-description">
        These pages provide food recommendations, allow users to track their nutrition for the day, and to add meals to their daily nutrition.
      </p>

      <h4>Workouts</h4>
      <p className="case-study-description">
        These pages recommend workout routines, which contain various workouts which users can perform and add. The routines also contain a difficulty level and a number of days it takes up per week so that the user has some preliminary information about them. The individual workouts also contain videos showing how to perform them correctly and track the number of repetitions/time for each of them that is added.
      </p>
    </div>

    <div className="content-section">
      <h3>Scope for improvement</h3>
      <p className="case-study-description">
        Another feature that would help keep users motivated would be a system where one can add friends and compare their progress with them via leaderboards or achievement badges. Additionally, a feature that allows users to create their own custom workout routines would also add some flexibility.
      </p>
    </div>

    <div className="content-section">
      <h3>Conclusions</h3>
      <p className="case-study-description">
        Through this project I learned the importance of user research and how it narrows down the root of the problems, providing a sense of direction during the design process. This project could be improved further if I conducted user tests and modified the design based on the findings. I am however happy at the end result which will help fitness enthusiasts keep track of their routines in a disciplined manner.
      </p>
    </div>
  </div>
);

function FittrackCaseStudy() {
  const slides = [
    // Add slide images here when available
  ];

  const overview = "For many new fitness enthusiasts, determining the right routines and finding the necessary guidance to begin can be challenging. This often results in feelings of overwhelm, causing some to abandon their fitness goals altogether. FitTrack provides a solution by allowing users to monitor their fitness and eating habits while tracking their progress across all key areas.";

  return (
    <CaseStudy
      title="Fittrack"
      description="Tracking progress to improve fitness motivation"
      thumbnail="/Fittrack/thumbnail.png"
      slides={slides}
      overview={overview}
      content={<FittrackContent />}
    />
  );
}

export default FittrackCaseStudy;

