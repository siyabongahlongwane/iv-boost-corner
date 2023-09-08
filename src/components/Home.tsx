import BenefitsCard from "./BenefitsCard";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const benefits = [
    {
      icon: "fa fa-bolt",
      bgCol: "dark-blue-bg",
      iconCol: " dark-blue-col",
      heading: "Increased Energy",
      description:
        "You will feel rejuvenated and ready to take on the world again, positive mindset and physical self.",
    },
    {
      icon: "fa fa-smile-o",
      bgCol: "primary-bg",
      iconCol: " primary-col",
      heading: "Glowing Skin",
      description:
        "Have your skin in a healthy and glowing state again, feel comfortable and beautiful.",
    },
    {
      icon: "fa fa-check-circle",
      bgCol: "dark-blue-bg",
      iconCol: " dark-blue-col",
      heading: "Reduce Anxiety",
      description:
        "Get back in track with your life by balancing your hormones and eliminating anxiety and depression.",
    },
    {
      icon: "fa fa-envira",
      bgCol: "primary-bg",
      iconCol: " primary-col",
      heading: "Slow down aging",
      description:
        "Slow down the aging process by improving the hormones that keep you young and rejuvenated.",
    },
  ];
  return (
    <div className="d-flex flex-col">
      <div className="hero">
        <Hero></Hero>
      </div>
      <div className="d-flex flex-row">
        {benefits.map((benefit) => {
          return (
            <BenefitsCard key={benefit.heading} {...benefit}></BenefitsCard>
          );
        })}
      </div>
      <div className="padding-med">
        <WhyChooseUs></WhyChooseUs>
      </div>
    </div>
  );
};

export default Home;
