const ContactCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="card d-flex flex-col align-items-center gap-1">
      <div className="d-flex flex-col icon-wrapper align-items-center justify-content-center">
        <i className={"primary-col " + icon}></i>
      </div>
      <h5 className="align-center">{text}</h5>
    </div>
  );
};

export default ContactCard;
