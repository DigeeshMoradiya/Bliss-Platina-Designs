import Breadcrumb from "./common/Breadcrumb";
import ContactForm from "./contactuscomponent/ContactForm";
import GoogleMap from "./contactuscomponent/GoogleMap";

export default function ContactUs() {
    return (
        <>
            <Breadcrumb pageTitle="Contact Us" />
            <GoogleMap />
            <ContactForm />
        </>
    );
}
