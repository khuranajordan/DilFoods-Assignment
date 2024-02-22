import "./product.scss";
import Single from "../../src/components/single/Single";
import { singleProduct } from "../../src/data";

const Product = () => {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
