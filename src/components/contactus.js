import Breadcrumb from "./common/Breadcrumb";
import SEO from "./common/SEO";
import ContactForm from "./contactuscomponent/ContactForm";
import GoogleMap from "./contactuscomponent/GoogleMap";

export default function ContactUs() {
    return (
        <>
            <SEO
                title="Contact Us | Trusted Online Jewelry Store"
                description="Get in touch with our jewelry experts. We're here to assist you with custom orders, diamond consultations, and all your questions."
            />
            <Breadcrumb pageTitle="Contact Us" />
            <GoogleMap />
            <ContactForm />
        </>
    );
}
