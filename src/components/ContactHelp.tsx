import { useEffect } from "react";
import ContactCard from "./ContactCard";
import { useLocation } from "react-router-dom";

const ContactHelp = () => {
  const routePath = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [routePath]);

  const contactCards = [
    {
      icon: "fa fa-map-marker",
      text: "07 Sunrock Village, 131 Agulhas Rd, Klipportjie, 1459",
    },
    {
      icon: "fa fa-envelope",
      text: "info@ivboostcorner.co.za",
    },
    {
      icon: "fa fa-phone",
      text: "062 309 6853",
    },
  ];
  return (
    <div className="contact-help-wrapper d-flex flex-col align-items-center gap-med block">
      <div className="block align-center">
        <h1>We are here to help you.</h1>
        <p>Reach out to us and we will be more than happy to assist!</p>
      </div>
      <div className="d-flex flex-row justify-content-between max-width-75 flex-col-xs gap-2-xs">
        {contactCards.map((card) => {
          return <ContactCard key={card.text} {...card}></ContactCard>
        })}
      </div>
    </div>
  );
};

export default ContactHelp;
