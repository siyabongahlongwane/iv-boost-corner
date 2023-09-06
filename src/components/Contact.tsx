import BreadCrumbsJumbotron from "./BreadCrumbsJumbotron";
import ContactForm from "./ContactForm";
import ContactHelp from "./ContactHelp";
import Map from "./Map";

const Contact = () => {
    const path = 'Contact Us';
    return(
        <div className="contact-wrapper">
            <BreadCrumbsJumbotron path={path}></BreadCrumbsJumbotron>
            <ContactHelp></ContactHelp>
            <ContactForm></ContactForm>
            <Map></Map>
        </div>
    );
}

export default Contact;