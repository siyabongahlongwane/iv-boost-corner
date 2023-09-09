const WhyChooseUs = () => {
  const reasons = [
    "Quality Assurance",
    "Regulatory Compliance",
    "Product Range",
    "Reliability and Consistency",
    "Price Competitiveness",
    "Customer Support",
    "Distribution and Delivery",
    "Package Customization",
    "Innovation and Research",
    "Sustainability and Ethical Practices",
    "Geographic Location",
  ];
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-col flex-1 gap-1">
        <h2 className="gray-col">Why Choose IV Boost Corner</h2>
        <div className="d-flex flex-col gap-xs">
          {reasons.map((reason) => {
            return (
              <span className="gray-col">
                {" "}
                <i className="fa fa-arrow-circle-right primary-col"></i>{" "}
                {reason}
              </span>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-col flex-1 green-glow banner">
        <img width={"100%"} src="../src/assets/side-banner.webp" alt="Drip" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
