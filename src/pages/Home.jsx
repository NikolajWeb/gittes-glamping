import PageHeader from "../components/PageHeader/PageHeader";
import InfoSection from "../components/InfoSection/InfoSection";
import Reviews from "../components/Reviews/Reviews";
import PageFooter from "../components/pageFooter/PageFooter";

const Home = () => {
    return  <article>
        <PageHeader />
        <InfoSection />
        <Reviews />
        <PageFooter />
    </article>;
};

export default Home;