import { useEffect } from "react";
import BreadCrumbsJumbotron from "./BreadCrumbsJumbotron";
import ContactForm from "./ContactForm";
import ContactHelp from "./ContactHelp";
import Map from "./Map";
import { useLocation } from "react-router-dom";

const Contact = () => {
    const routePath = useLocation();

    useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }, [routePath]);
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