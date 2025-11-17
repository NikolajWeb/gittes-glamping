import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/Gittes_Glamping_Assets/image_03.jpg"; 

const Contact = () => {
  return (
    <article>
      <PageHeader titleOne='Kontakt os' bgImg={bgImg} />
      <InfoSection
        title={"Vil du booke et ophold? Eller har du blot et spørgsmål?"}
        description={"Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer."}
        form
      />
    </article>
    
  );
};

export default Contact;
