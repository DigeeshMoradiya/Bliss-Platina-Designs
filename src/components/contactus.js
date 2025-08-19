import Breadcrumb from "./common/Breadcrumb";
import Loader from "./common/Loader";
import SEO from "./common/SEO";
import ContactForm from "./contactuscomponent/ContactForm";
import GoogleMap from "./contactuscomponent/GoogleMap";

export default function ContactUs({ settingData, loader }) {
    return (
        <>
            <SEO
                title="Contact Us | Trusted Online Jewelry Store"
                description="Get in touch with our jewelry experts. We're here to assist you with custom orders, diamond consultations, and all your questions."
            />
            <Breadcrumb pageTitle="Contact Us" />
            {loader ? <div className="d-flex justify-content-center align-items-center mb-5">
                <Loader />
            </div> :
                <>
                    <GoogleMap settingData={settingData} />
                    <ContactForm settingData={settingData} />
                </>}
        </>
    );
}
