import BreadCrumbsJumbotron from "./BreadCrumbsJubotron";
import ContactForm from "./ContactForm";
import ContactHelp from "./ContactHelp";
import Map from "./Map";

const Contact = () => {
    return(
        <div className="contact-wrapper">
            <BreadCrumbsJumbotron></BreadCrumbsJumbotron>
            <ContactHelp></ContactHelp>
            <ContactForm></ContactForm>
            <Map></Map>
        </div>
    );
}

export default Contact;