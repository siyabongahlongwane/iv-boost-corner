import productList, { Product } from "../products";
import BreadCrumbsJumbotron from "./BreadCrumbsJumbotron";
import ProductItem from "./ProductItem";
// import ProductItem from "./ProductItem";

const Products = () => {
  const path = "Products";
  return (
    <div className="d-flex flex-col">
      <BreadCrumbsJumbotron path={path}></BreadCrumbsJumbotron>
      <div className="d-flex flex-row wrap justify-content-between product-wrapper">
          {productList.map((product: Product) => {
            return <ProductItem key={product.name} {...product}></ProductItem>;
          })}
      </div>
    </div>
  );
};

export default Products;
