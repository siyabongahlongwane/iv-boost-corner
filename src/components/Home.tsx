import BenefitsCard from "./BenefitsCard";
import Hero from "./Hero";

const Home = () => {
  const benefits = [
    {
      icon: "fa fa-car",
      bgCol: "dark-blue-bg",
      iconCol: " dark-blue-col",
      heading: "Increased Energy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum quis aperiam perspiciatis nesciunt amet provident cumque maxime fugiat id!",
    },
    {
      icon: "fa fa-car",
      bgCol: "primary-bg",
      iconCol: " primary-col",
      heading: "Glowing Skin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum quis aperiam perspiciatis nesciunt amet provident cumque maxime fugiat id!",
    },
    {
      icon: "fa fa-car",
      bgCol: "dark-blue-bg",
      iconCol: " dark-blue-col",
      heading: "Reduce Anxiety",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum quis aperiam perspiciatis nesciunt amet provident cumque maxime fugiat id!",
    },
    {
      icon: "fa fa-car",
      bgCol: "primary-bg",
      iconCol: " primary-col",
      heading: "Slow down aging",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum quis aperiam perspiciatis nesciunt amet provident cumque maxime fugiat id!",
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
    </div>
  );
};

export default Home;
