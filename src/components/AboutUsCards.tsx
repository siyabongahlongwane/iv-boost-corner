const AboutUsCards = () => {
  return (
    <div className="d-flex flex-row justify-content-between about-card-wrapper padding-med">
      <div className="d-flex flex-row inherit-height  flex-1 ">
        <div className="green-bar primary-bg inherit-height"></div>
        <div className="d-flex flex-col flex-1 inherit-height padding-std">
          <h1>Mission Statement</h1>
          <p>
            To rejuvenate your body by furnishing it with appropriate elements
            and nutrients. By providing your body with nutrients and elements it
            needs to be rejuvenated to thrive further miles. Through our IV drip
            therapy, nutrition and hydration, our mission is to rejuvenate your
            body to the fullest to experience better life.
          </p>
        </div>
      </div>
      <div className="d-flex flex-col inherit-height justify-content-between flex-1">
        <div className="d-flex flex-row inherit-height">
          <div className="green-bar primary-bg inherit-height"></div>
          <div className="d-flex flex-col flex-1 inherit-height padding-1">          
          <h1>Vision Statement</h1>
          <p>To furnish the best service in IV drip industry with greater effect in your daily livelihood.</p>
        </div>
        </div>
        <div className="d-flex flex-row inherit-height">
          <div className="green-bar primary-bg inherit-height"></div>
          <div className="d-flex flex-col flex-1 inherit-height padding-1">
          <h1>Target Market</h1>
          <p>We target People who work hard needs energy, sportsman and sportswomen, people with skin problems, older people who have athritis, body pains, muscle pain, people who wants to detox, Hang over.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCards;
