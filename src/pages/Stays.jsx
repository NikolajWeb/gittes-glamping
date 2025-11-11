import PageFooter from "../components/pageFooter/PageFooter.jsx";
import StaysInfoSection from "../components/stays_infoSection/stays_infoSection.jsx";
import StaysInfoHeader from "../components/stays_pageHeader/stays_pageHeader.jsx";

const Stays = () => {
    return (
        <article>
            <StaysInfoHeader />
            <StaysInfoSection />
            <PageFooter />
        </article>
    );
};

export default Stays;