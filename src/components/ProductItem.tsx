import { Product } from "../products";

const ProductItem = ({
  name,
  ingredients,
  benefits,
  price,
  image,
}: Product) => {
  return (
    <div className="d-flex flex-col green-glow product-card">
      <div className="d-flex image-wrapper primary-bg flex-col justify-content-center align-items-center">
        <img
          className="green-glow"
          width={80}
          height={80}
          src={`../src/assets/${image}`}
          alt={name}
        />
      </div>
      <div className="d-flex flex-col text">
        <h4>{name}</h4>
        <span className='primary-col'>Ingredients</span>
        <small>{ingredients.join(", ")}</small>
        <span className='primary-col'>Benefits</span>
        <small>{benefits}</small>
        <h3 className='primary-col'
          style={
            price[0].length == 1 ? { display: "block" } : { display: "none" }
          }
        >
          R{price}
        </h3>
        <div
          style={
            price[0].length > 1 ? { display: "block" } : { display: "none" }
          }
        >
          <h3>
            <span className='primary-col'>{price[0]} </span>
          </h3>
          <h3>
            <span className='primary-col'>{price[1]} </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
