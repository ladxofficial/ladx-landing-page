import AboutUs from "../../components/public/AboutUs";
import ContactAndFooter from "../../components/public/ContactAndFooter";
import FAQ from "../../components/public/FAQ";
import Header from "../../components/public/Header";
import HeroSection from "../../components/public/HeroSection";
import HowWeWorks from "../../components/public/HowWeWork";
import Testimonials from "../../components/public/Testimonials";
import { testimonials } from "../../data/testimonialsData";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <HowWeWorks />
            <AboutUs />
            <Testimonials testimonials={testimonials} />
            <FAQ />
            <ContactAndFooter />
        </div>
    );
};

export default LandingPage;