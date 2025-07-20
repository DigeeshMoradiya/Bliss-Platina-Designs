import Breadcrumb from "./common/Breadcrumb";
import SEO from "./common/SEO";

export default function Diamond() {


    return (
        <>
            <SEO
                title="About Us"
                description="Learn more about our jewelry store, our mission, and our commitment to quality."
                keywords="about, jewelry, gold, diamond, company"
            />
            <Breadcrumb pageTitle="Diamond" />

            <section className="custom-design section-padding">
                <h2 className="slide-title justify-content-center d-flex">
                    Coming Soon!
                </h2>
            </section>
        </>
    );
}