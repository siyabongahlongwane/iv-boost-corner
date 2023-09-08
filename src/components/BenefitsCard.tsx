type Benefit = {
  icon: string;
  bgCol: string;
  iconCol: string;
  heading: string;
  description: string;
};
const BenefitsCard = ({ icon, bgCol, iconCol, heading, description }: Benefit) => {
  return (
    <div
      className={"d-flex flex-col align-items-center benefits-card gap-std " + bgCol}
    >
      <div className="rounded d-flex flex-col white-bg justify-content-center align-items-center icon-wrapper">
        <i className={icon + iconCol}></i>
      </div>
      <div className="d-flex flex-col align-center">
        <h2 className="white-col">{heading}</h2>
        <p className="white-col">{description}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
