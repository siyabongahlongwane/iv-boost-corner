import { Product } from "../products";

const ProductItem = ({
  name,
  ingredients,
  benefits,
  price,
  image,
}: Product) => {
  return (
    <div className="d-flex flex-col green-glow product-card primary-bg">
      <div className="d-flex image-wrapper orange-bg flex-col justify-content-center align-items-center">
        <img
          className="green-glow"
          width={80}
          height={80}
          src={
            import.meta.env.MODE == "development"
              ? `../src/assets/${image}`
              : `/${image}`
          }
          alt={name}
        />
      </div>
      <div className="d-flex flex-col text white-col">
        <h4 className="uppercase">{name}</h4>
        <span className="white-col">Ingredients</span>
        {ingredients.map((benefit, index) => (
          <small key={index}>{benefit}</small>
        ))}

        <span className="white-col">Benefits</span>
        {Array.isArray(benefits) ? (
          benefits.map((benefit, index) => <small key={index}>{benefit}</small>)
        ) : (
          <small>{benefits}</small>
        )}
        <h4
          className="white-col"
          style={
            price[0].length == 1 ? { display: "block" } : { display: "none" }
          }
        >
          R{price}
        </h4>
        <div
          style={
            price[0].length > 1 ? { display: "block" } : { display: "none" }
          }
        >
          <h4>
            <span className="white-col">{price[0]} </span>
          </h4>
          <h4>
            <span className="white-col">{price[1]} </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
