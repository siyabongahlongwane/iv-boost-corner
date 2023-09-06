import BreadCrumbsJumbotron from "./BreadCrumbsJubotron";
import ContactHelp from "./ContactHelp";
import Map from "./Map";

const Contact = () => {
    return(
        <div className="contact-wrapper">
            <BreadCrumbsJumbotron></BreadCrumbsJumbotron>
            <ContactHelp></ContactHelp>
            <Map></Map>
        </div>
    );
}

export default Contact;