import { useEffect, useState } from "react";
import AboutSection from "./aboutuscomponent/AboutSection";
import Team from "./aboutuscomponent/Team";
import Testimonials from "./aboutuscomponent/Testimonials";
import WhyChooseUs from "./aboutuscomponent/WhyChooseUs";
import Breadcrumb from "./common/Breadcrumb";
import ScrollTop from "./common/ScrollTop";
import SEO from "./common/SEO";
import { getCustomerReviews } from "@/lib/api/home/home";

export default function AboutUs() {
    const [customerReviewsData, setCustomerReviewsData] = useState([]);
    const [loader, setLoader] = useState(false);

    const onloadCustomerReviews = async () => {
        setLoader(true);
        try {
            const result = await getCustomerReviews();
            if (result?.success) {
                setCustomerReviewsData(result?.data);
                setLoader(false);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };
    useEffect(() => {
        onloadCustomerReviews();
    }, []);

    return (
        <>
            <SEO
                title="About Us"
                description="Learn more about our jewelry store, our mission, and our commitment to quality."
                keywords="about, jewelry, gold, diamond, company"
            />
            <Breadcrumb pageTitle="About Us" />
            <AboutSection />
            <Testimonials customerReviewsData={customerReviewsData} />
            <WhyChooseUs />
            {/* <Team /> */}
        </>
    );
}