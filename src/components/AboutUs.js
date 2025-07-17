import AboutSection from "./aboutuscomponent/AboutSection";
import Team from "./aboutuscomponent/Team";
import Testimonials from "./aboutuscomponent/Testimonials";
import WhyChooseUs from "./aboutuscomponent/WhyChooseUs";
import Breadcrumb from "./common/Breadcrumb";
import ScrollTop from "./common/ScrollTop";
import SEO from "./common/SEO";

export default function AboutUs() {


    return (
        <>
            <SEO
                title="About Us"
                description="Learn more about our jewelry store, our mission, and our commitment to quality."
                keywords="about, jewelry, gold, diamond, company"
            />
            <Breadcrumb pageTitle="About Us" />
            <AboutSection />
            <WhyChooseUs />
            <Testimonials />
            <Team />
        </>
    );
}