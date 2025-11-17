import ActivitiesSection from "../components/activitiesSection/ActivitiesSection";
import Pageheader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/Gittes_Glamping_Assets/image_04.jpg"; 

const Activities = () => {
  return (
    <article>
      <Pageheader bgImg={bgImg}/>
      <ActivitiesSection />
    </article>
  );
};

export default Activities;
